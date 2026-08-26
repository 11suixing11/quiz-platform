"use client";

import { notifyAuthSessionChanged } from "./auth-client";
import type { StorageSnapshot } from "./storage";

export interface AccountUser {
  id: string;
  email: string;
  displayName: string;
  createdAt: number;
}

interface BetterAuthUser {
  id: string;
  email: string;
  name: string;
  createdAt: string | Date;
}

interface SessionResponse {
  session: unknown;
  user: BetterAuthUser;
}

interface DataResponse {
  snapshot: StorageSnapshot;
}

export interface CloudDataSummary {
  attempts: number;
  bookmarks: number;
  sessions: number;
}

interface SummaryResponse {
  summary: CloudDataSummary;
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

export type SyncChoice = "merge" | "cloud" | "local";

function mapUser(value: BetterAuthUser | null | undefined): AccountUser | null {
  if (!value || typeof value.id !== "string" || typeof value.email !== "string" || typeof value.name !== "string") return null;
  const createdAt = value.createdAt instanceof Date ? value.createdAt.getTime() : Date.parse(value.createdAt);
  return {
    id: value.id,
    email: value.email,
    displayName: value.name,
    createdAt: Number.isFinite(createdAt) ? createdAt : 0,
  };
}

async function responseJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => null) as (T & { error?: string; message?: string; code?: string }) | null;
  if (!response.ok) {
    const message = payload && typeof payload === "object" && (payload.error || payload.message);
    throw new Error(typeof message === "string" ? message : "请求失败");
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

export async function registerAccount(input: { email: string; password: string; displayName: string }) {
  const payload = await responseJson<{ user: BetterAuthUser }>(await fetch("/api/auth/sign-up/email", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name: input.displayName, email: input.email, password: input.password }),
  }));
  notifyAuthSessionChanged();
  return authUserResponse({ user: payload.user, session: null });
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

export async function getCloudSnapshot() {
  return responseJson<DataResponse>(await fetch("/api/me/data", {
    credentials: "include",
    cache: "no-store",
    headers: { Accept: "application/json" },
  }));
}

/** Read counts only before the user chooses whether to sync. */
export async function getCloudSummary() {
  return responseJson<SummaryResponse>(await fetch("/api/me/data?view=summary", {
    credentials: "include",
    cache: "no-store",
    headers: { Accept: "application/json" },
  }));
}

/** Save mutable account state only; completed attempts require explicit import. */
export async function saveCloudSnapshot(snapshot: StorageSnapshot, mode: "merge" | "replace" = "merge") {
  const mutableSnapshot = {
    version: snapshot.version,
    preferences: snapshot.preferences,
    bookmarks: snapshot.bookmarks,
    sessions: snapshot.sessions,
  };
  return responseJson<DataResponse>(await fetch("/api/me/data", {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ snapshot: mutableSnapshot, mode }),
  }));
}

/** One-time, user-authorized import of existing browser history. */
export async function importCloudSnapshot(snapshot: StorageSnapshot, mode: "merge" | "replace" = "merge") {
  return responseJson<DataResponse>(await fetch("/api/me/data/import", {
    method: "PUT",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ snapshot, mode }),
  }));
}

/** Submit only answers; the server loads the canonical quiz and scores it. */
export async function submitCloudQuiz(testId: string, answers: number[]) {
  return responseJson<QuizResponse>(await fetch("/api/me/quiz", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ testId, answers }),
  }));
}

export async function deleteCloudAttempt(id: string) {
  const query = new URLSearchParams({ id });
  return responseJson<{ ok: true }>(await fetch(`/api/me/quiz?${query}`, {
    method: "DELETE",
    credentials: "include",
    headers: { Accept: "application/json" },
  }));
}

export async function clearCloudAttempts() {
  return responseJson<{ ok: true }>(await fetch("/api/me/quiz", {
    method: "DELETE",
    credentials: "include",
    headers: { Accept: "application/json" },
  }));
}

export async function deleteCloudData() {
  return responseJson<{ ok: true }>(await fetch("/api/me/data", {
    method: "DELETE",
    credentials: "include",
    headers: { Accept: "application/json" },
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
