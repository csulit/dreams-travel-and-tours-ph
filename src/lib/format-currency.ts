export function centavosToPHP(centavos: number): string {
  const php = centavos / 100
  return `PHP ${php.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function phpToCentavos(php: number): number {
  return Math.round(php * 100)
}
