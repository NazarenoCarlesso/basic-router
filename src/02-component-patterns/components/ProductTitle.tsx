import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

const ProductTitle = () => {
  const { product: { title } } = useContext(ProductContext)

  return (
    <span className={styles.productDescription}>
      {title}
    </span>
  )
}

export default ProductTitle