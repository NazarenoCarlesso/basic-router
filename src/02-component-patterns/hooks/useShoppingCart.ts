import { useState } from 'react'
import { onChangeArgs, ProductInCart, ShoppingCart, useShoppingCartReturn } from '../interfaces/index';

const useShoppingCart = (): useShoppingCartReturn => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({})

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart(prevShoppingCart => {
      const productInCart: ProductInCart = prevShoppingCart[product.id] || { ...product, count: 0 }

      if (Math.max(productInCart.count + count, 0)) {
        productInCart.count += count
        return {
          ...prevShoppingCart,
          [product.id]: productInCart
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: toDelete, ...rest } = prevShoppingCart
        return rest
      }
    })
  }

  return {
    shoppingCart,
    onProductCountChange,
  }
}

export default useShoppingCart