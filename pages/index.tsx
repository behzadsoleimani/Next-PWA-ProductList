import ProductsList from '../components/ProductsList'
import Meta from '../components/Meta'
import { IHomePage } from '../types';

const Home = ({ products }: IHomePage) => {

  return (
    <div>
      <Meta />
      <ProductsList products={products} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const products = await res.json();



  return {
    props: {
      products,
    },
  }
}

export default Home;
