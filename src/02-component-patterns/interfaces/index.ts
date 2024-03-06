import { ReactElement } from 'react'

export interface ProductCardProps {
  children?: ReactElement | ReactElement[]
  product: Product
  className?: string
  style?: React.CSSProperties
  onChange?: (args: onChangeArgs) => void
  value?: number
}

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

export interface ProductTitleProps {
  className?: string
  style?: React.CSSProperties
}

export interface ProductImageProps {
  img?: string
  className?: string
  style?: React.CSSProperties
}

export interface ProductButtonsProps {
  className?: string
  style?: React.CSSProperties
}

export interface ProductInCart extends Product {
  count: number
}

export interface ShoppingCart {
  [key: string]: ProductInCart
}

export interface onChangeArgs {
  product: Product
  count: number
}