"use client"

import { useState, useEffect } from "react"
import type { MenuItem, PizzaSize } from "@/lib/content"

export interface CartItem {
  id: string
  name: string
  size: PizzaSize
  price: number
  quantity: number
}

const CART_STORAGE_KEY = "pizzaria-cart"

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])
  const [isHydrated, setIsHydrated] = useState(false)

  // Carregar do localStorage no mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      if (stored) {
        setItems(JSON.parse(stored))
      }
    } catch (error) {
      console.error("Erro ao carregar carrinho:", error)
    }
    setIsHydrated(true)
  }, [])

  // Salvar no localStorage quando items mudar
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
      } catch (error) {
        console.error("Erro ao salvar carrinho:", error)
      }
    }
  }, [items, isHydrated])

  const addItem = (menuItem: MenuItem, size: PizzaSize) => {
    setItems((current) => {
      const existingIndex = current.findIndex(
        (item) => item.id === menuItem.id && item.size === size
      )

      if (existingIndex >= 0) {
        // Incrementa quantidade
        const updated = [...current]
        updated[existingIndex].quantity += 1
        return updated
      } else {
        // Adiciona novo item
        return [
          ...current,
          {
            id: menuItem.id,
            name: menuItem.name,
            size,
            price: menuItem.prices[size],
            quantity: 1,
          },
        ]
      }
    })
  }

  const updateQuantity = (id: string, size: PizzaSize, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id, size)
      return
    }

    setItems((current) =>
      current.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      )
    )
  }

  const removeItem = (id: string, size: PizzaSize) => {
    setItems((current) =>
      current.filter((item) => !(item.id === id && item.size === size))
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    itemCount,
    isHydrated,
  }
}
