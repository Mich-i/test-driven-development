export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error('Seconds cannot be negative...')
  }
  
  const totalSeconds = Math.round(seconds);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  if (hours > 0 && minutes === 0 && secs === 0) {
    return `${hours}h`;
  }

  if (hours > 0) {
    return `${hours}h${minutes}m${secs}s`;
  }

  if (minutes > 0) {
    return `${minutes}m${secs}s`;
  }

  return `${secs}s`;
}
