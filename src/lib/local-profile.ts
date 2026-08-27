export interface LocalProfile {
  avatar: string;
  bio: string;
  tags: string[];
  updatedAt: number;
}

export const PROFILE_EVENT = "know-yourself:profile-change";
const PROFILE_PREFIX = "know-yourself:profile:";
const EMPTY_PROFILE: LocalProfile = { avatar: "", bio: "", tags: [], updatedAt: 0 };
const AVATAR_PATTERN = /^data:image\/jpeg;base64,[a-zA-Z0-9+/=]+$/;

export function profileStorageKey(userId: string) {
  return `${PROFILE_PREFIX}${encodeURIComponent(userId)}`;
}

function emitProfileChange(userId: string | null) {
  window.dispatchEvent(new CustomEvent(PROFILE_EVENT, { detail: { userId } }));
}

export function readLocalProfile(userId: string): LocalProfile {
  try {
    return parseLocalProfile(JSON.parse(window.localStorage.getItem(profileStorageKey(userId)) || "null")) ?? { ...EMPTY_PROFILE };
  } catch {
    return { ...EMPTY_PROFILE };
  }
}

export function parseLocalProfile(value: unknown): LocalProfile | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const profile = value as Partial<LocalProfile>;
  if (typeof profile.avatar !== "string" || typeof profile.bio !== "string" || !Array.isArray(profile.tags)) return null;
  const avatar = profile.avatar.slice(0, 400_000);
  return {
    avatar: avatar === "" || AVATAR_PATTERN.test(avatar) ? avatar : "",
    bio: profile.bio.slice(0, 120),
    tags: profile.tags.filter((tag): tag is string => typeof tag === "string").map((tag) => tag.trim().slice(0, 16)).filter(Boolean).slice(0, 6),
    updatedAt: typeof profile.updatedAt === "number" && Number.isFinite(profile.updatedAt) ? profile.updatedAt : 0,
  };
}

export function writeLocalProfile(userId: string, profile: LocalProfile) {
  try {
    window.localStorage.setItem(profileStorageKey(userId), JSON.stringify(parseLocalProfile(profile) ?? EMPTY_PROFILE));
    emitProfileChange(userId);
    return true;
  } catch {
    return false;
  }
}

export function clearLocalProfile(userId: string) {
  try {
    window.localStorage.removeItem(profileStorageKey(userId));
    emitProfileChange(userId);
    return true;
  } catch {
    // Storage can be disabled; account deletion must still be considered done.
    return false;
  }
}

export function clearAllLocalProfiles() {
  try {
    const keys = Array.from({ length: window.localStorage.length }, (_, index) => window.localStorage.key(index));
    for (const key of keys) if (key?.startsWith(PROFILE_PREFIX)) window.localStorage.removeItem(key);
    emitProfileChange(null);
  } catch {
    // Clearing application data should remain usable when storage is disabled.
  }
}

export function mergeLocalProfiles(current: LocalProfile, incoming: LocalProfile): LocalProfile {
  if (current.updatedAt > 0 && incoming.updatedAt > 0) {
    const latest = current.updatedAt >= incoming.updatedAt ? current : incoming;
    return { ...latest, tags: [...latest.tags] };
  }
  const preferCurrent = current.updatedAt >= incoming.updatedAt;
  return {
    avatar: current.avatar && incoming.avatar ? (preferCurrent ? current.avatar : incoming.avatar) : current.avatar || incoming.avatar,
    bio: current.bio && incoming.bio ? (preferCurrent ? current.bio : incoming.bio) : current.bio || incoming.bio,
    tags: Array.from(new Set(preferCurrent ? [...current.tags, ...incoming.tags] : [...incoming.tags, ...current.tags])).slice(0, 6),
    updatedAt: Math.max(current.updatedAt, incoming.updatedAt),
  };
}
