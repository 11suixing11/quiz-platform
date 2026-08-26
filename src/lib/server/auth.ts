/**
 * Compatibility import for existing server routes. The implementation lives
 * in `@/lib/auth`; no passwords, session tokens, or cookies are managed here.
 */
export {
  auth,
  ensureAuthReady,
  getCurrentAuthSession,
  getCurrentUser,
  isTrustedMutation,
  requestAddress,
  type AuthSession,
  type AuthUser,
} from "@/lib/auth";
