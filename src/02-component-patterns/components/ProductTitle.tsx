import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import { ProductTitleProps } from '../interfaces'

const ProductTitle = ({ className, style }: ProductTitleProps) => {
  const { product: { title } } = useContext(ProductContext)

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title}
    </span>
  )
}

export default ProductTitle