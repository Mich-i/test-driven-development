export function calcPoints(hits: string): number {
  const parts = hits.trim().split(' ').map(Number);
  let points = 0;

  for (let i = 0; i < parts.length; i += 2) {
    const multiplier = parts[i];
    const sector = parts[i + 1];

    points += multiplier * sector;
  }

  return points;
}

export function possibleCheckout(x: number): string {
  console.log(x);
  throw new Error("not implemented yet");
}
