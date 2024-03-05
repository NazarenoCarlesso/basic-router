import styles from '../styles/styles.module.css'
import useProduct from '../hooks/useProduct'
import { createContext } from 'react'
import { ProductCardProps, ProductContextProps } from '../interfaces'
import ProductTitle from './ProductTitle'
import ProductImage from './ProductImage'
import ProductButtons from './ProductButtons'

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)
const { Provider } = ProductContext

const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle
ProductCard.Image = ProductImage
ProductCard.Buttons = ProductButtons

export { ProductImage, ProductTitle, ProductButtons }

export default ProductCard