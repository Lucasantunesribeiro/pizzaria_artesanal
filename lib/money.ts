/**
 * Formata valor em Real (BRL)
 * @param value - Valor numérico
 * @param showSymbol - Se deve exibir R$
 * @returns String formatada (ex: "R$ 45,90")
 */
export function formatMoney(value: number, showSymbol = true): string {
  const formatted = value.toFixed(2).replace('.', ',')
  return showSymbol ? `R$ ${formatted}` : formatted
}

/**
 * Parse string de dinheiro para número
 * @param value - String no formato "45,90" ou "R$ 45,90"
 */
export function parseMoney(value: string): number {
  const cleaned = value.replace('R$', '').replace(/\s/g, '').replace(',', '.')
  return parseFloat(cleaned) || 0
}
