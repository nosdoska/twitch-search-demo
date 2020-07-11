export function getExistentHistory(): string[] {
  const history = window.localStorage.getItem("history");

  if (history) {
    const parsed = JSON.parse(history);

    return parsed;
  }

  return [];
}
