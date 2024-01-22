export function extractDate(): string {
  const date: Date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}/${year}`;
}
export function extractTomorowDate(): string {
  const date: Date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() + 1;
  return `${month}/${day}/${year}`;
}
