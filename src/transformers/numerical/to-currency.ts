export function toCurrency(value: number, reduce: boolean = true): string {
  return (reduce ? value / 100 : value).toLocaleString('en-UK', {
    minimumFractionDigits: 2,
  });
}
