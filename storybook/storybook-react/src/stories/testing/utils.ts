export function screenUpdate(ms?: number) {
  return new Promise((resolve) => setTimeout(resolve, ms ?? 50));
}
