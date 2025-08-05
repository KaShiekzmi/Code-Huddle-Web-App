export function formatUtcDate(
  utcDate: string,
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  },
  locale: string = "en-US"
): string {
  const date = new Date(utcDate);
  if (isNaN(date.getTime())) return "Invalid Date";
  return date.toLocaleDateString(locale, options);
}
