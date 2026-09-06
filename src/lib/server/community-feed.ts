import "server-only";

import { listPublishedJournalFeedEntries } from "./journal";
import { listCommunityPosts, type CommunityPost } from "./community";
import { wornBadgesForAuthors, type AuthorBadge } from "./badges";

export type CommunityFeedFilter = "all" | "assessment" | "text" | "image";

export interface CommunityFeedImage {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  decorative: boolean;
  caption: string;
}

export interface CommunityFeedCommunityItem extends CommunityPost {
  source: "community";
  sourceId: string;
  href: null;
  images: [];
}

export interface CommunityFeedJournalItem {
  source: "journal";
  sourceId: string;
  id: string;
  kind: "image";
  title: string;
  body: string;
  contentLanguage: string;
  testId: "";
  testName: "";
  testNameEn: "";
  resultTitle: null;
  resultTitleEn: null;
  dimensions: [];
  reflection: string;
  showResultType: false;
  showDimensions: false;
  showAvatar: boolean;
  allowComments: boolean;
  createdAt: number;
  author: { displayName: string; avatar: string; badges: AuthorBadge[] };
  reactionCount: number;
  commentCount: number;
  reacted: boolean;
  isAuthor: boolean;
  comments: [];
  href: string;
  images: CommunityFeedImage[];
  imageCount: number;
  publishedAt: number;
}

export type CommunityFeedItem = CommunityFeedCommunityItem | CommunityFeedJournalItem;

type JournalVariant = { src?: unknown; width?: unknown; height?: unknown };
type JournalImage = {
  id?: unknown;
  alt?: unknown;
  decorative?: unknown;
  caption?: unknown;
  width?: unknown;
  height?: unknown;
  variants?: { medium?: JournalVariant; large?: JournalVariant; thumb?: JournalVariant };
};

function number(value: unknown, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function string(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function publicImage(value: JournalImage, fallbackPosition: number): CommunityFeedImage | null {
  const variants = value.variants ?? {};
  const variant = variants.medium ?? variants.large ?? variants.thumb;
  const src = string(variant?.src);
  if (!src) return null;
  return {
    id: string(value.id, `image-${fallbackPosition}`),
    src,
    width: number(variant?.width, number(value.width, 1)),
    height: number(variant?.height, number(value.height, 1)),
    alt: string(value.alt),
    decorative: value.decorative === true,
    caption: string(value.caption),
  };
}

function mapCommunityPost(post: CommunityPost): CommunityFeedCommunityItem {
  return {
    ...post,
    source: "community",
    sourceId: post.id,
    href: null,
    images: [],
  };
}

function mapJournalEntry(entry: Record<string, unknown>, badges: AuthorBadge[]): CommunityFeedJournalItem {
  // The public list intentionally returns only a cover to keep the feed small.
  // Detail pages still load the complete immutable revision.
  const rawCover = entry.cover && typeof entry.cover === "object" ? entry.cover as JournalImage : null;
  const cover = rawCover ? publicImage(rawCover, 0) : null;
  const images = cover ? [cover] : [];
  const id = string(entry.id);
  const contentLanguage = string(entry.contentLanguage, "zh");
  const title = string(entry.title).trim() || (contentLanguage === "en" ? "Image post" : contentLanguage === "bilingual" ? "图像分享 / Image post" : "图像分享");
  const author = entry.author && typeof entry.author === "object" ? entry.author as Record<string, unknown> : {};
  const publishedAt = number(entry.publishedAt, number(entry.updatedAt, Date.now()));
  return {
    source: "journal",
    sourceId: id,
    id,
    kind: "image",
    title,
    body: string(entry.body),
    contentLanguage,
    testId: "",
    testName: "",
    testNameEn: "",
    resultTitle: null,
    resultTitleEn: null,
    dimensions: [],
    reflection: string(entry.body),
    showResultType: false,
    showDimensions: false,
    showAvatar: false,
    allowComments: entry.allowComments !== false,
    createdAt: publishedAt,
    author: { displayName: string(author.displayName, "社区成员"), avatar: string(author.avatar), badges },
    reactionCount: number(entry.reactionCount),
    commentCount: number(entry.commentCount),
    reacted: entry.reacted === true,
    isAuthor: entry.isOwner === true,
    comments: [],
    href: `/journal/${encodeURIComponent(id)}/?from=community`,
    images,
    imageCount: number(entry.imageCount, images.length),
    publishedAt,
  };
}

export async function listCommunityFeed(viewerId: string | null, sort: "latest" | "resonant" = "latest", filter: CommunityFeedFilter = "all") {
  // Apply the type filter at the source. Each source has its own page limit,
  // so filtering after a mixed query could return fewer than 20 matching
  // items whenever the other post kind is more active.
  const communityKind = filter === "assessment" || filter === "text" ? filter : undefined;
  const communityItems = filter === "image"
    ? []
    : (await listCommunityPosts(viewerId, sort, communityKind)).map(mapCommunityPost);
  const journalEntries = filter === "assessment" || filter === "text"
    ? []
    : listPublishedJournalFeedEntries(viewerId, sort);
  // Journal authors are named by their revision snapshot; their worn badges
  // are attached here, keyed by the internal user id that never leaves the server.
  const journalBadges = await wornBadgesForAuthors(journalEntries.map((entry) => entry.authorUserId));
  const journalItems = journalEntries.map((entry) => mapJournalEntry(entry as unknown as Record<string, unknown>, journalBadges.get(entry.authorUserId) ?? []));
  const all = [...communityItems, ...journalItems]
    .filter((item) => filter === "all"
      || (filter === "image" && item.source === "journal")
      || (item.source === "community" && item.kind === filter))
    .sort((a, b) => sort === "resonant"
      ? b.reactionCount - a.reactionCount || b.createdAt - a.createdAt || b.sourceId.localeCompare(a.sourceId)
      : b.createdAt - a.createdAt || b.sourceId.localeCompare(a.sourceId))
    .slice(0, 20);
  return all;
}
