"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  getAccount,
  getCloudSnapshot,
  getCloudSummary,
  importCloudSnapshot,
  logoutAccount,
  saveCloudSnapshot,
  type AccountUser,
  type SyncChoice,
} from "@/lib/account";
import { AUTH_SESSION_EVENT, useSession } from "@/lib/auth-client";
import { STORAGE_EVENT, readSnapshot, writeSnapshot, type StorageSnapshot } from "@/lib/storage";

export type { SyncChoice } from "@/lib/account";

type SyncState = "guest" | "loading" | "awaiting-consent" | "ready" | "syncing" | "paused" | "error";

export interface SyncSummary {
  attempts: number;
  bookmarks: number;
  sessions: number;
}

interface AccountContextValue {
  user: AccountUser | null;
  syncState: SyncState;
  syncError: string;
  syncChoice: SyncChoice | null;
  /** Counts from the last authorized cloud read; null before consent. */
  cloudSummary: SyncSummary | null;
  refreshAccount(): Promise<void>;
  /** Apply an explicit first-login choice. */
  chooseSync(choice: SyncChoice): Promise<void>;
  /** Alias kept for account/settings surfaces that use a setter-shaped name. */
  setSyncChoice(choice: SyncChoice): Promise<void>;
  syncNow(): Promise<void>;
  signOut(): Promise<void>;
}

const AccountContext = createContext<AccountContextValue | null>(null);
const CONSENT_PREFIX = "know-yourself:sync-consent:";

function consentKey(userId: string) {
  return `${CONSENT_PREFIX}${encodeURIComponent(userId)}`;
}

function readConsent(userId: string): SyncChoice | null {
  try {
    const value = window.localStorage.getItem(consentKey(userId));
    return value === "merge" || value === "cloud" || value === "local" ? value : null;
  } catch {
    return null;
  }
}

function writeConsent(userId: string, choice: SyncChoice) {
  try {
    window.localStorage.setItem(consentKey(userId), choice);
  } catch {
    // Private windows and exhausted storage must not block account access.
  }
}

function mergeSnapshotsForImport(local: StorageSnapshot, remote: StorageSnapshot): StorageSnapshot {
  const localIds = new Set(local.attempts.map((attempt) => attempt.id));
  return {
    version: local.version,
    // Keep this device's preference when importing; the user can change it
    // afterwards and the mutable sync path will persist that choice.
    preferences: local.preferences,
    attempts: [...local.attempts, ...remote.attempts.filter((attempt) => !localIds.has(attempt.id))].sort((a, b) => a.timestamp - b.timestamp),
    bookmarks: Array.from(new Set([...local.bookmarks, ...remote.bookmarks])),
    sessions: { ...remote.sessions, ...local.sessions },
  };
}

function reconcileCloudSnapshot(local: StorageSnapshot, remote: StorageSnapshot): StorageSnapshot {
  const localById = new Map(local.attempts.map((attempt) => [attempt.id, attempt]));
  const remoteIds = new Set(remote.attempts.map((attempt) => attempt.id));
  const remoteAttempts = remote.attempts.map((attempt) => {
    const localAttempt = localById.get(attempt.id);
    return localAttempt ? { ...attempt, answers: localAttempt.answers } : attempt;
  });
  const localOnlyAttempts = local.attempts.filter((attempt) =>
    !remoteIds.has(attempt.id) && !attempt.id.startsWith("server:"),
  );
  return {
    ...remote,
    preferences: remote.preferences,
    attempts: [...remoteAttempts, ...localOnlyAttempts].sort((a, b) => a.timestamp - b.timestamp),
    bookmarks: remote.bookmarks,
    sessions: remote.sessions,
  };
}

function summarizeSnapshot(snapshot: StorageSnapshot): SyncSummary {
  return {
    attempts: snapshot.attempts.length,
    bookmarks: snapshot.bookmarks.length,
    sessions: Object.keys(snapshot.sessions).length,
  };
}

export function AccountProvider({ children }: { children: React.ReactNode }) {
  const { data: authSession, isPending: authSessionPending, refetch: refetchAuthSession } = useSession();
  const [user, setUser] = useState<AccountUser | null>(null);
  const [syncChoice, setSyncChoiceState] = useState<SyncChoice | null>(null);
  const [cloudSummary, setCloudSummary] = useState<SyncSummary | null>(null);
  const [syncState, setSyncState] = useState<SyncState>("loading");
  const [syncError, setSyncError] = useState("");
  const timer = useRef<number | null>(null);
  const applyingRemote = useRef(false);
  const userRef = useRef<AccountUser | null>(null);
  const choiceRef = useRef<SyncChoice | null>(null);
  const refreshVersion = useRef(0);

  const setChoice = useCallback((choice: SyncChoice | null) => {
    choiceRef.current = choice;
    setSyncChoiceState(choice);
  }, []);

  const writeRemoteSafely = useCallback((snapshot: StorageSnapshot) => {
    applyingRemote.current = true;
    writeSnapshot(snapshot);
    // writeSnapshot dispatches synchronously; release the guard on the next
    // turn so a listener installed by another component cannot echo it.
    window.setTimeout(() => { applyingRemote.current = false; }, 0);
  }, []);

  const syncNow = useCallback(async () => {
    const currentUser = userRef.current;
    const choice = choiceRef.current;
    if (!currentUser || (choice !== "merge" && choice !== "cloud") || applyingRemote.current) return;
    const version = refreshVersion.current;
    setSyncState("syncing");
    setSyncError("");
    try {
      const local = readSnapshot();
      const { snapshot } = await saveCloudSnapshot(local, "replace");
      if (version !== refreshVersion.current || userRef.current?.id !== currentUser.id) return;
      setCloudSummary(summarizeSnapshot(snapshot));
      writeRemoteSafely(reconcileCloudSnapshot(local, snapshot));
      setSyncState("ready");
    } catch (error) {
      if (version !== refreshVersion.current || userRef.current?.id !== currentUser.id) return;
      setSyncError(error instanceof Error ? error.message : "同步失败");
      setSyncState("error");
    }
  }, [writeRemoteSafely]);

  const chooseSync = useCallback(async (choice: SyncChoice) => {
    const currentUser = userRef.current;
    if (!currentUser) return;
    const version = refreshVersion.current;
    setSyncError("");
    setSyncState("syncing");
    try {
      if (choice === "local") {
        writeConsent(currentUser.id, choice);
        setChoice(choice);
        setCloudSummary(null);
        setSyncState("paused");
        return;
      }

      const { snapshot: remote } = await getCloudSnapshot();
      if (version !== refreshVersion.current || userRef.current?.id !== currentUser.id) return;
      if (choice === "cloud") {
        writeConsent(currentUser.id, choice);
        setChoice(choice);
        setCloudSummary(summarizeSnapshot(remote));
        // "Only use cloud" is an explicit replacement: local history and
        // mutable state are discarded in this browser, never uploaded.
        writeRemoteSafely(remote);
        setSyncState("ready");
        return;
      }

      // `merge` is the only path allowed to upload existing local attempts.
      const merged = mergeSnapshotsForImport(readSnapshot(), remote);
      const { snapshot: imported } = await importCloudSnapshot(merged, "merge");
      if (version !== refreshVersion.current || userRef.current?.id !== currentUser.id) return;
      setCloudSummary(summarizeSnapshot(imported));
      writeConsent(currentUser.id, choice);
      setChoice(choice);
      // Keep local attempt answers for the local result view. The server's
      // imported copy is canonical for cloud storage and has answers stripped.
      writeRemoteSafely(reconcileCloudSnapshot(merged, imported));
      setSyncState("ready");
    } catch (error) {
      if (version !== refreshVersion.current || userRef.current?.id !== currentUser.id) return;
      setSyncError(error instanceof Error ? error.message : "同步失败");
      setSyncState("error");
    }
  }, [setChoice, writeRemoteSafely]);

  const refreshAccount = useCallback(async () => {
    const version = ++refreshVersion.current;
    setSyncState("loading");
    setSyncError("");
    try {
      const account = await getAccount();
      if (version !== refreshVersion.current) return;
      userRef.current = account.user;
      setUser(account.user);
      if (!account.user) {
        setChoice(null);
        setCloudSummary(null);
        setSyncState("guest");
        return;
      }

      const remembered = readConsent(account.user.id);
      setChoice(remembered);
      if (!remembered) {
        // A read-only preview makes the three choices concrete. No local data
        // is uploaded until the user explicitly selects a sync mode.
        try {
          const { summary } = await getCloudSummary();
          if (version !== refreshVersion.current || userRef.current?.id !== account.user.id) return;
          setCloudSummary(summary);
        } catch {
          // A network hiccup must not block the local-only choice.
          setCloudSummary(null);
        }
        if (version !== refreshVersion.current) return;
        setSyncState("awaiting-consent");
        return;
      }

      if (remembered === "local") {
        setCloudSummary(null);
        setSyncState("paused");
        return;
      }

      // Cloud history is authoritative for server-created records. Keep raw
      // answers only from this device and retain local fallback records that
      // have never reached the server.
      const { snapshot } = await getCloudSnapshot();
      if (version !== refreshVersion.current) return;
      setCloudSummary(summarizeSnapshot(snapshot));
      const local = readSnapshot();
      const next = remembered === "merge" ? reconcileCloudSnapshot(local, snapshot) : snapshot;
      writeRemoteSafely(next);
      setSyncState("ready");
    } catch (error) {
      if (version !== refreshVersion.current) return;
      setSyncError(error instanceof Error ? error.message : "账号状态加载失败");
      setSyncState("error");
    }
  }, [setChoice, writeRemoteSafely]);

  const signOut = useCallback(async () => {
    try {
      await logoutAccount();
    } catch (error) {
      setSyncError(error instanceof Error ? error.message : "退出失败");
      setSyncState("error");
      return;
    }
    refreshVersion.current += 1;
    userRef.current = null;
    setUser(null);
    setChoice(null);
    setCloudSummary(null);
    setSyncState("guest");
    setSyncError("");
  }, [setChoice]);

  useEffect(() => {
    if (authSessionPending) return;
    const timerId = window.setTimeout(() => { void refreshAccount(); }, 0);
    return () => window.clearTimeout(timerId);
  }, [authSession?.session.id, authSessionPending, refreshAccount]);

  useEffect(() => {
    const onAuthStorage = (event: StorageEvent) => {
      if (event.key === AUTH_SESSION_EVENT) void refetchAuthSession();
    };
    window.addEventListener("storage", onAuthStorage);
    return () => window.removeEventListener("storage", onAuthStorage);
  }, [refetchAuthSession]);

  useEffect(() => {
    if (!user || (syncChoice !== "merge" && syncChoice !== "cloud")) return;
    const onStorageChange = () => {
      if (applyingRemote.current) return;
      if (timer.current !== null) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => { void syncNow(); }, 700);
    };
    window.addEventListener(STORAGE_EVENT, onStorageChange);
    return () => {
      window.removeEventListener(STORAGE_EVENT, onStorageChange);
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, [syncChoice, syncNow, user]);

  const value = useMemo(() => ({
    user,
    syncState,
    syncError,
    syncChoice,
    cloudSummary,
    refreshAccount,
    chooseSync,
    setSyncChoice: chooseSync,
    syncNow,
    signOut,
  }), [chooseSync, cloudSummary, refreshAccount, signOut, syncError, syncChoice, syncNow, syncState, user]);
  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (!context) throw new Error("useAccount must be used inside AccountProvider");
  return context;
}
