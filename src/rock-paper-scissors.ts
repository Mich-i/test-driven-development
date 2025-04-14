export function play(p1: string, p2: string): number {
  p1 = p1.trim().toLowerCase();
  p2 = p2.trim().toLowerCase();

  if (p1 === 'rock' && p2 === 'scissors') {
    return 1;
  }

  if (p1 === 'rock' && p2 === 'paper') {
    return 2;
  }

  return 0;
}
