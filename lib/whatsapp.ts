/**
 * Gera link do WhatsApp com mensagem pré-preenchida
 * @param phone - Número no formato 55DDNNNNNNNNN
 * @param message - Mensagem a ser enviada
 * @returns URL do wa.me
 */
export function getWhatsAppLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

/**
 * Formata mensagem de pedido do carrinho
 */
export function formatOrderMessage(items: Array<{
  name: string
  size?: string
  quantity: number
  price: number
}>, deliveryFee: number): string {
  let message = "*Novo Pedido - Pizzaria Artesanal*\n\n"

  items.forEach((item) => {
    const size = item.size ? ` (${item.size})` : ''
    message += `${item.quantity}x ${item.name}${size}\n`
  })

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const total = subtotal + deliveryFee

  message += `\n*Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}`
  message += `\n*Taxa de entrega:* R$ ${deliveryFee.toFixed(2).replace('.', ',')}`
  message += `\n*Total:* R$ ${total.toFixed(2).replace('.', ',')}`

  return message
}

/**
 * Formata mensagem de contato
 */
export function formatContactMessage(data: {
  name: string
  neighborhood: string
  type: 'entrega' | 'retirada'
  notes?: string
}): string {
  let message = `*Contato - ${data.name}*\n\n`
  message += `Bairro: ${data.neighborhood}\n`
  message += `Tipo: ${data.type === 'entrega' ? 'Entrega' : 'Retirada'}\n`
  if (data.notes) {
    message += `\nObservações:\n${data.notes}`
  }
  return message
}

/**
 * Formata mensagem de reserva
 */
export function formatReservationMessage(data: {
  name: string
  phone: string
  date: string
  time: string
  people: string
  notes?: string
}): string {
  const formattedDate = data.date ? data.date.split("-").reverse().join("/") : data.date
  let message = `*Reserva - ${data.name}*\n\n`
  message += `Data: ${formattedDate}\n`
  message += `Horário: ${data.time}\n`
  message += `Pessoas: ${data.people}\n`
  message += `WhatsApp: ${data.phone}\n`
  if (data.notes) {
    message += `\nObservações:\n${data.notes}`
  }
  return message
}
