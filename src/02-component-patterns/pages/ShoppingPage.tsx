import ProductCard, { ProductButtons, ProductImage, ProductTitle } from '../components/ProductCard'
import products from '../mocks/products.json'
import '../styles/custom-styles.css'

const ShoppingPage = () => {
  const product = products[0]

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard className='bg-dark text-white' product={product}>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: 'rgb(46,75,97)',
            boxShadow: '10px 10px 10px rgba(0,0,0,.1)',
            border: '1px solid rgb(41,82,112)'
          }}>
          <ProductImage style={{ borderRadius: '15px', boxShadow: '10px 10px 10px rgba(0,0,0,.1)' }} />
          <ProductTitle style={{ color: '#a4d5ff' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} className='blue-border' />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage