"use client";

import { createAuthClient } from "better-auth/react";

/** Storage key used to notify other tabs after a raw auth request succeeds. */
export const AUTH_SESSION_EVENT = "know-yourself:auth-session";

/** Browser client for the same-origin Better Auth route handler. */
export const authClient = createAuthClient({
  basePath: "/api/auth",
  fetchOptions: {
    credentials: "include",
  },
  sessionOptions: {
    refetchOnWindowFocus: true,
  },
});

export const { useSession } = authClient;

/**
 * The account helpers use the fetch API directly so their error payloads stay
 * consistent with the rest of this app. Notify Better Auth's local session
 * atom as well, and leave a storage marker for other tabs to refetch.
 */
export function notifyAuthSessionChanged() {
  authClient.$store.notify("$sessionSignal");
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(AUTH_SESSION_EVENT, `${Date.now()}:${Math.random().toString(36).slice(2)}`);
  } catch {
    // Private windows and exhausted storage must not block authentication.
  }
}
