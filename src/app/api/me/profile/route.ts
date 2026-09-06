import { z } from "zod";
import { getCurrentUser } from "@/lib/server/auth";
import { asRow, getDatabase } from "@/lib/server/database";
import { allowRateLimitedRequest, assertExpectedAccount, assertTrustedMutation, error, json, rateLimitResponse, readJson } from "@/lib/server/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const schema = z.strictObject({
  avatar: z.string().max(400_000).refine((value) => !value || /^data:image\/jpeg;base64,[a-zA-Z0-9+/=]+$/.test(value), "Invalid avatar").optional(),
  bio: z.string().max(120).optional(),
  tags: z.array(z.string().min(1).max(16)).max(6).optional(),
  showBadges: z.boolean().optional(),
});
const AVATAR_PATTERN = /^data:image\/jpeg;base64,[a-zA-Z0-9+/=]+$/;

function normalizeAvatar(value: unknown) {
  if (typeof value !== "string") return "";
  const avatar = value.slice(0, 400_000);
  return avatar === "" || AVATAR_PATTERN.test(avatar) ? avatar : "";
}

function read(userId: string) {
  const row = asRow(getDatabase().prepare("SELECT avatar, bio, tags_json, show_badges, updated_at FROM profiles WHERE user_id = ?").get(userId));
  let tags: string[] = [];
  try { const parsed = JSON.parse(typeof row?.tags_json === "string" ? row.tags_json : "[]"); if (Array.isArray(parsed)) tags = parsed.filter((tag): tag is string => typeof tag === "string").slice(0, 6); } catch { /* use empty tags */ }
  return { avatar: normalizeAvatar(row?.avatar), bio: typeof row?.bio === "string" ? row.bio.slice(0, 120) : "", tags: tags.map((tag) => tag.trim().slice(0, 16)).filter(Boolean), showBadges: Number(row?.show_badges) === 1, updatedAt: Number(row?.updated_at) || 0 };
}

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  return json({ userId: user.id, profile: read(user.id) });
}

export async function PUT(request: Request) {
  const trusted = await assertTrustedMutation(request);
  if (trusted) return trusted;
  const user = await getCurrentUser();
  if (!user) return error("请先登录", 401, "UNAUTHORIZED");
  const accountError = assertExpectedAccount(request, user.id);
  if (accountError) return accountError;
  if (!allowRateLimitedRequest(request, `profile:${user.id}`)) return rateLimitResponse();
  try {
    const input = schema.parse(await readJson(request, 450_000));
    const current = read(user.id);
    // Absent fields keep their current value, so badge visibility can be
    // toggled without the caller re-sending the avatar, bio, and tags.
    const avatar = input.avatar !== undefined ? normalizeAvatar(input.avatar) : current.avatar;
    const bio = input.bio !== undefined ? input.bio.trim() : current.bio;
    const tags = input.tags !== undefined ? input.tags.map((tag) => tag.trim()).filter(Boolean) : current.tags;
    const showBadges = input.showBadges === undefined ? (current.showBadges ? 1 : 0) : (input.showBadges ? 1 : 0);
    getDatabase().prepare(`INSERT INTO profiles (user_id, avatar, bio, tags_json, show_badges, updated_at) VALUES (?, ?, ?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET avatar = excluded.avatar, bio = excluded.bio, tags_json = excluded.tags_json, show_badges = excluded.show_badges, updated_at = excluded.updated_at`).run(user.id, avatar, bio, JSON.stringify(tags), showBadges, Date.now());
    return json({ userId: user.id, profile: read(user.id) });
  } catch { return error("个人资料格式无效", 400, "INVALID_PROFILE"); }
}
