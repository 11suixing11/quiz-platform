"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  getAccount,
  getCloudSnapshot,
  importCloudSnapshot,
  isSyncRevisionConflict,
  logoutAccount,
  type AccountUser,
  type SyncChoice,
} from "@/lib/account";
import { mergeAccountSnapshots, readSyncBaseline, writeSyncBaseline } from "@/lib/account-sync";
import { AUTH_SESSION_EVENT, useSession } from "@/lib/auth-client";
import { STORAGE_EVENT, activateStorageScope, isStorageAvailable, isStorageScopeActive, readSnapshot, writeAccountSnapshot, writeSnapshot, type StorageSnapshot } from "@/lib/storage";

export type { SyncChoice } from "@/lib/account";

type SyncState = "guest" | "loading" | "ready" | "syncing" | "error";

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
  /** Counts from the last successful cloud synchronization. */
  cloudSummary: SyncSummary | null;
  refreshAccount(): Promise<void>;
  syncNow(): Promise<void>;
  signOut(): Promise<void>;
}

const AccountContext = createContext<AccountContextValue | null>(null);

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
  const syncing = useRef(false);
  const syncQueued = useRef(false);
  const userRef = useRef<AccountUser | null>(null);
  const choiceRef = useRef<SyncChoice | null>(null);
  const refreshVersion = useRef(0);

  const setChoice = useCallback((choice: SyncChoice | null) => {
    choiceRef.current = choice;
    setSyncChoiceState(choice);
  }, []);

  const writeRemoteSafely = useCallback((snapshot: StorageSnapshot) => {
    applyingRemote.current = true;
    try {
      writeSnapshot(snapshot);
    } finally {
      applyingRemote.current = false;
    }
  }, []);

  const activateScopeSafely = useCallback((userId: string | null) => {
    applyingRemote.current = true;
    try {
      return activateStorageScope(userId);
    } finally {
      applyingRemote.current = false;
    }
  }, []);

  const isCurrentSync = useCallback((userId: string, version: number) =>
    version === refreshVersion.current
      && userRef.current?.id === userId
      && isStorageScopeActive(userId), []);

  const performSync = useCallback(async (currentUser: AccountUser, version: number) => {
    setSyncState("syncing");
    setSyncError("");
    for (let attempt = 0; attempt < 3; attempt += 1) {
      if (!isCurrentSync(currentUser.id, version)) return false;
      const { snapshot: remote, revision } = await getCloudSnapshot(currentUser.id);
      if (!isCurrentSync(currentUser.id, version)) return false;
      const local = readSnapshot();
      const localFingerprint = JSON.stringify(local);
      const merged = mergeAccountSnapshots(local, remote, readSyncBaseline(currentUser.id));
      try {
        const { snapshot } = await importCloudSnapshot(currentUser.id, merged, revision, "merge");
        if (!isCurrentSync(currentUser.id, version)) return false;
        const next = reconcileCloudSnapshot(merged, snapshot);
        writeSyncBaseline(currentUser.id, next);
        setCloudSummary(summarizeSnapshot(next));

        const latestLocal = readSnapshot();
        if (JSON.stringify(latestLocal) === localFingerprint) {
          writeAccountSnapshot(currentUser.id, next);
          writeRemoteSafely(next);
        } else {
          writeAccountSnapshot(currentUser.id, latestLocal);
          syncQueued.current = true;
        }
        setSyncState("ready");
        return true;
      } catch (error) {
        if (isSyncRevisionConflict(error)) continue;
        throw error;
      }
    }
    throw new Error("云端数据持续更新，请稍后重试");
  }, [isCurrentSync, writeRemoteSafely]);

  const syncNow = useCallback(async () => {
    const currentUser = userRef.current;
    if (!currentUser || choiceRef.current !== "merge" || applyingRemote.current || !isStorageScopeActive(currentUser.id)) return;
    if (syncing.current) {
      syncQueued.current = true;
      return;
    }
    syncing.current = true;
    try {
      do {
        syncQueued.current = false;
        const nextUser = userRef.current;
        if (!nextUser || choiceRef.current !== "merge" || applyingRemote.current || !isStorageScopeActive(nextUser.id)) break;
        const version = refreshVersion.current;
        try {
          const completed = await performSync(nextUser, version);
          if (!completed && !syncQueued.current) break;
        } catch (error) {
          if (!isCurrentSync(nextUser.id, version)) {
            if (syncQueued.current) continue;
            break;
          }
          setSyncError(error instanceof Error ? error.message : "同步失败");
          setSyncState("error");
          syncQueued.current = false;
          break;
        }
      } while (syncQueued.current);
    } finally {
      syncing.current = false;
    }
  }, [isCurrentSync, performSync]);

  const refreshAccount = useCallback(async () => {
    const version = ++refreshVersion.current;
    setChoice(null);
    setSyncState("loading");
    setSyncError("");
    try {
      const account = await getAccount();
      if (version !== refreshVersion.current) return;
      activateScopeSafely(account.user?.id ?? null);
      userRef.current = account.user;
      setUser(account.user);
      if (!account.user) {
        setChoice(null);
        setCloudSummary(null);
        setSyncState("guest");
        return;
      }

      setChoice("merge");
      // Private browsing and hardened browser policies can disable localStorage.
      // Keep the signed-in account usable with cloud-only reads in that case
      // instead of leaving the provider in its loading state forever.
      if (!isStorageAvailable()) {
        setCloudSummary(null);
        setSyncState("ready");
        return;
      }
      await syncNow();
    } catch (error) {
      if (version !== refreshVersion.current) return;
      setSyncError(error instanceof Error ? error.message : "账号状态加载失败");
      setSyncState("error");
    }
  }, [activateScopeSafely, setChoice, syncNow]);

  const signOut = useCallback(async () => {
    try {
      await logoutAccount();
    } catch (error) {
      setSyncError(error instanceof Error ? error.message : "退出失败");
      setSyncState("error");
      return;
    }
    refreshVersion.current += 1;
    activateScopeSafely(null);
    userRef.current = null;
    syncing.current = false;
    syncQueued.current = false;
    setUser(null);
    setChoice(null);
    setCloudSummary(null);
    setSyncState("guest");
    setSyncError("");
  }, [activateScopeSafely, setChoice]);

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
    if (!user || syncChoice !== "merge") return;
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
    syncNow,
    signOut,
  }), [cloudSummary, refreshAccount, signOut, syncError, syncChoice, syncNow, syncState, user]);
  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (!context) throw new Error("useAccount must be used inside AccountProvider");
  return context;
}
