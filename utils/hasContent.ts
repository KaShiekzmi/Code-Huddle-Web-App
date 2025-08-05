export function hasContent(content: string | string[]): boolean {
  if (Array.isArray(content)) {
    return content.some((item) => item.trim().length > 0);
  }
  return content.trim().length > 0;
}
