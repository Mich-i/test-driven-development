export function formatDuration(seconds: number): string {
  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;

  if (minutes > 0) {
    return `${minutes}m${secs}s`;
  } else {
    return `${secs}s`;
  }
}