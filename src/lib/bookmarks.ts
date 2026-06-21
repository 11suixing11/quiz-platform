export function getBookmarks(): string[] {
  try {
    return JSON.parse(localStorage.getItem("quiz-platform-bookmarks") || "[]");
  } catch {
    return [];
  }
}

export function toggleBookmark(id: string): string[] {
  const bm = getBookmarks();
  const idx = bm.indexOf(id);
  if (idx >= 0) {
    bm.splice(idx, 1);
  } else {
    bm.push(id);
  }
  localStorage.setItem("quiz-platform-bookmarks", JSON.stringify(bm));
  return bm;
}

export function isBookmarked(id: string): boolean {
  return getBookmarks().includes(id);
}
