export function sumArray(items: number[]): number {
  let totalSum: number = 0;

  items.forEach((n: number) => {
    totalSum = totalSum + n;
  });

  return totalSum;
}
