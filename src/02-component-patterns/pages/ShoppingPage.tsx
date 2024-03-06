import { useState } from 'react'
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components/ProductCard'
import { Product, ShoppingCart } from '../interfaces'
import productsMock from '../mocks/products.json'
import '../styles/custom-styles.css'
import { onChangeArgs } from '../interfaces/index';

const ShoppingPage = () => {
  const products: Product[] = productsMock

  const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({})

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart(prevShoppingCart => {
      if (count === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: toDelete, ...rest } = prevShoppingCart
        return rest
      }
      return {
        ...prevShoppingCart,
        [product.id]: { ...product, count }
      }
    })
  }

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          products.map(product => (
            <ProductCard
              className='bg-dark text-white'
              product={product}
              value={shoppingCart[product.id]?.count || 0}
              key={product.id}
              onChange={onProductCountChange}>
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>
      <div className='shopping-cart'>
        {
          Object.values(shoppingCart).map(product => (
            <ProductCard
              key={product.id}
              className='bg-dark text-white'
              product={product}
              style={{ width: '100px' }}
              value={product.count}
              onChange={onProductCountChange}>
              <ProductImage className='custom-image' />
              <ProductButtons
                className='custom-buttons'
                style={{ marginTop: '0px', marginBottom: '6px' }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}

export default ShoppingPage