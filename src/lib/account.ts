"use client";

import { notifyAuthSessionChanged } from "./auth-client";
import type { CollectedBadge, WornBadge } from "@/lib/server/badges";
export type { CollectedBadge, WornBadge };
import type { StorageSnapshot } from "./storage";

export interface AccountUser {
  id: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
  createdAt: number;
}

interface BetterAuthUser {
  id: string;
  email: string;
  name: string;
  emailVerified?: boolean;
  createdAt: string | Date;
}

interface SessionResponse {
  session: unknown;
  user: BetterAuthUser;
}

export interface DataResponse {
  snapshot: StorageSnapshot;
  revision: number;
}

interface QuizResponse {
  attempt: StorageSnapshot["attempts"][number];
}

export interface ChangePasswordInput {
  currentPassword: string;
  newPassword: string;
  /** Invalidate every other signed-in device after the password changes. */
  revokeOtherSessions?: boolean;
}

export interface ChangePasswordResponse {
  user: AccountUser;
}

export interface AccountCapabilities {
  emailVerificationAvailable: boolean;
  registrationAvailable: boolean;
  passwordResetAvailable: boolean;
  hostAllowed: boolean;
}

export class AccountApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly code?: string,
    public readonly revision?: number,
  ) {
    super(message);
    this.name = "AccountApiError";
  }
}

export function isSyncRevisionConflict(error: unknown): error is AccountApiError {
  return error instanceof AccountApiError && error.status === 409 && error.code === "SYNC_REVISION_CONFLICT";
}

export type SyncChoice = "merge";
export interface RemoteProfile { avatar: string; bio: string; tags: string[]; showBadges: boolean; updatedAt: number; }
/** The badge collection derives from the account's completed assessments. */
export interface RemoteBadges {
  userId: string;
  collected: CollectedBadge[];
  worn: WornBadge[];
  showBadges: boolean;
}

function accountHeaders(userId: string, json = false) {
  return {
    Accept: "application/json",
    "X-Expected-User-Id": userId,
    ...(json ? { "Content-Type": "application/json" } : {}),
  };
}

export async function getRemoteProfile(userId: string) {
  return responseJson<{ userId: string; profile: RemoteProfile }>(await fetch("/api/me/profile", { credentials: "include", cache: "no-store", headers: accountHeaders(userId) }));
}

export async function saveRemoteProfile(userId: string, profile: Omit<RemoteProfile, "showBadges">) {
  return responseJson<{ userId: string; profile: RemoteProfile }>(await fetch("/api/me/profile", { method: "PUT", credentials: "include", headers: accountHeaders(userId, true), body: JSON.stringify({ avatar: profile.avatar, bio: profile.bio, tags: profile.tags }) }));
}

/** Read the derived badge collection, the worn selection, and the visibility opt-in. */
export async function getRemoteBadges(userId: string) {
  return responseJson<RemoteBadges>(await fetch("/api/me/badges", { credentials: "include", cache: "no-store", headers: accountHeaders(userId) }));
}

/** Replace the complete worn selection (at most three badges). */
export async function saveRemoteWornBadges(userId: string, worn: Array<{ testId: string; resultKey: string }>) {
  return responseJson<{ userId: string; worn: WornBadge[] }>(await fetch("/api/me/badges/worn", { method: "PUT", credentials: "include", headers: accountHeaders(userId, true), body: JSON.stringify({ worn }) }));
}

/** Toggle whether other readers see worn badges; the other profile fields are left unchanged. */
export async function saveRemoteBadgeVisibility(userId: string, showBadges: boolean) {
  return responseJson<{ userId: string; profile: RemoteProfile }>(await fetch("/api/me/profile", { method: "PUT", credentials: "include", headers: accountHeaders(userId, true), body: JSON.stringify({ showBadges }) }));
}

function mapUser(value: BetterAuthUser | null | undefined): AccountUser | null {
  if (!value || typeof value.id !== "string" || typeof value.email !== "string" || typeof value.name !== "string") return null;
  const createdAt = value.createdAt instanceof Date ? value.createdAt.getTime() : Date.parse(value.createdAt);
  return {
    id: value.id,
    email: value.email,
    displayName: value.name,
    emailVerified: value.emailVerified === true,
    createdAt: Number.isFinite(createdAt) ? createdAt : 0,
  };
}

async function responseJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => null) as (T & { error?: string; message?: string; code?: string; revision?: number }) | null;
  if (!response.ok) {
    const message = payload && typeof payload === "object" && (payload.error || payload.message);
    const revision = payload && typeof payload.revision === "number" && Number.isSafeInteger(payload.revision) ? payload.revision : undefined;
    throw new AccountApiError(typeof message === "string" ? message : "请求失败", response.status, payload?.code, revision);
  }
  return payload as T;
}

function authUserResponse(payload: SessionResponse | null): { user: AccountUser | null } {
  return { user: mapUser(payload?.user) };
}

export async function getAccount() {
  const payload = await responseJson<SessionResponse | null>(await fetch("/api/auth/get-session", {
    credentials: "include",
    cache: "no-store",
    headers: { Accept: "application/json" },
  }));
  return authUserResponse(payload);
}

export async function getAccountCapabilities() {
  return responseJson<AccountCapabilities>(await fetch("/api/config/account", {
    cache: "no-store",
    headers: { Accept: "application/json" },
  }));
}

export async function registerAccount(input: { email: string; password: string; displayName: string; captchaToken: string }) {
  const payload = await responseJson<{ user: BetterAuthUser }>(await fetch("/api/auth/sign-up/email", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Captcha-Response": input.captchaToken,
    },
    body: JSON.stringify({ name: input.displayName, email: input.email, password: input.password, callbackURL: "/account/" }),
  }));
  notifyAuthSessionChanged();
  return authUserResponse({ user: payload.user, session: null });
}

export async function sendVerificationEmail(email: string) {
  return responseJson<{ status: boolean }>(await fetch("/api/auth/send-verification-email", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email, callbackURL: "/account/" }),
  }));
}

/**
 * Request a password-reset email. The response is intentionally identical
 * for unknown addresses so the flow never reveals which emails exist.
 */
export async function requestPasswordReset(input: { email: string; captchaToken: string; redirectTo: string }) {
  return responseJson<{ status: boolean }>(await fetch("/api/auth/request-password-reset", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Captcha-Response": input.captchaToken,
    },
    body: JSON.stringify({ email: input.email, redirectTo: input.redirectTo }),
  }));
}

/** Set a new password with the single-use, time-limited reset token. */
export async function resetPassword(input: { token: string; newPassword: string }) {
  return responseJson<{ status: boolean }>(await fetch("/api/auth/reset-password", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ token: input.token, newPassword: input.newPassword }),
  }));
}

export async function loginAccount(input: { email: string; password: string }) {
  const payload = await responseJson<{ user: BetterAuthUser }>(await fetch("/api/auth/sign-in/email", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email: input.email, password: input.password, rememberMe: true }),
  }));
  notifyAuthSessionChanged();
  return authUserResponse({ user: payload.user, session: null });
}

export async function logoutAccount() {
  const payload = await responseJson<{ success: boolean }>(await fetch("/api/auth/sign-out", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: "{}",
  }));
  notifyAuthSessionChanged();
  return payload;
}

/** Change the credential password and, by default, sign out other devices. */
export async function changePassword(input: ChangePasswordInput): Promise<ChangePasswordResponse> {
  const payload = await responseJson<{ user: BetterAuthUser }>(await fetch("/api/auth/change-password", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      currentPassword: input.currentPassword,
      newPassword: input.newPassword,
      revokeOtherSessions: input.revokeOtherSessions ?? true,
    }),
  }));
  const user = mapUser(payload.user);
  if (!user) throw new Error("账号响应无效");
  notifyAuthSessionChanged();
  return { user };
}

export async function getCloudSnapshot(userId: string) {
  return responseJson<DataResponse>(await fetch("/api/me/data", {
    credentials: "include",
    cache: "no-store",
    headers: accountHeaders(userId),
  }));
}

/** Read cloud counts without downloading the complete result payload. */
/** Save mutable account state only; completed attempts use the history sync path. */
export async function saveCloudSnapshot(userId: string, snapshot: StorageSnapshot, baseRevision: number, mode: "merge" | "replace" = "merge") {
  const mutableSnapshot = {
    version: snapshot.version,
    preferences: snapshot.preferences,
    bookmarks: snapshot.bookmarks,
    sessions: snapshot.sessions,
  };
  return responseJson<DataResponse>(await fetch("/api/me/data", {
    method: "PUT",
    credentials: "include",
    headers: accountHeaders(userId, true),
    body: JSON.stringify({ snapshot: mutableSnapshot, baseRevision, mode }),
  }));
}

/** Merge browser history while replacing the account's current mutable state. */
export async function importCloudSnapshot(userId: string, snapshot: StorageSnapshot, baseRevision: number, mode: "merge" | "replace" = "merge") {
  return responseJson<DataResponse>(await fetch("/api/me/data/import", {
    method: "PUT",
    credentials: "include",
    headers: accountHeaders(userId, true),
    body: JSON.stringify({ snapshot, baseRevision, mode }),
  }));
}

/** Submit only answers; the server loads the canonical quiz and scores it. */
export async function submitCloudQuiz(userId: string, testId: string, answers: number[]) {
  return responseJson<QuizResponse>(await fetch("/api/me/quiz", {
    method: "POST",
    credentials: "include",
    headers: accountHeaders(userId, true),
    body: JSON.stringify({ testId, answers }),
  }));
}

export async function deleteCloudAttempt(userId: string, id: string) {
  const query = new URLSearchParams({ id });
  return responseJson<{ ok: true }>(await fetch(`/api/me/quiz?${query}`, {
    method: "DELETE",
    credentials: "include",
    headers: accountHeaders(userId),
  }));
}

export async function clearCloudAttempts(userId: string) {
  return responseJson<{ ok: true }>(await fetch("/api/me/quiz", {
    method: "DELETE",
    credentials: "include",
    headers: accountHeaders(userId),
  }));
}

export async function deleteCloudData(userId: string) {
  return responseJson<{ ok: true }>(await fetch("/api/me/data", {
    method: "DELETE",
    credentials: "include",
    headers: accountHeaders(userId),
  }));
}

/** Delete the Better Auth user. SQLite foreign keys cascade cloud data. */
export async function deleteAccount(password: string) {
  const payload = await responseJson<{ success: boolean; message: string }>(await fetch("/api/auth/delete-user", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ password }),
  }));
  notifyAuthSessionChanged();
  return payload;
}
