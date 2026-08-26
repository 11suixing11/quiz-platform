export interface LocalProfile {
  avatar: string;
  bio: string;
  tags: string[];
  updatedAt: number;
}

const PROFILE_PREFIX = "know-yourself:profile:";
const EMPTY_PROFILE: LocalProfile = { avatar: "", bio: "", tags: [], updatedAt: 0 };
const AVATAR_PATTERN = /^data:image\/jpeg;base64,[a-zA-Z0-9+/=]+$/;

function profileKey(userId: string) {
  return `${PROFILE_PREFIX}${encodeURIComponent(userId)}`;
}

export function readLocalProfile(userId: string): LocalProfile {
  try {
    return parseLocalProfile(JSON.parse(window.localStorage.getItem(profileKey(userId)) || "null")) ?? { ...EMPTY_PROFILE };
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
  window.localStorage.setItem(profileKey(userId), JSON.stringify(parseLocalProfile(profile) ?? EMPTY_PROFILE));
}

export function clearLocalProfile(userId: string) {
  try {
    window.localStorage.removeItem(profileKey(userId));
  } catch {
    // Storage can be disabled; account deletion must still be considered done.
  }
}

export function clearAllLocalProfiles() {
  const keys = Array.from({ length: window.localStorage.length }, (_, index) => window.localStorage.key(index));
  for (const key of keys) if (key?.startsWith(PROFILE_PREFIX)) window.localStorage.removeItem(key);
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
