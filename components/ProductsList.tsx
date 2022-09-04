import ProductItem from './ProductItem'
import productListStyles from '../styles/Products.module.css'
import { IProduct, IProductsList } from '../types'

const ProductsList = ({ products  }: IProductsList) => {
  return (
    <main className={productListStyles.grid}>
      {products.map((product: IProduct) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </main>
  )
}

export default ProductsList;
