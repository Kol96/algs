// 最大公约数
function gcd(p: number, q: number): number {
  if (q === 0) return p
  const t = p % q
  return gcd(q, t)
}
