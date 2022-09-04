import Layout from '../components/Layout';
import '../styles/globals.css';

function Home({ children }: any) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}


function MyApp({ Component, pageProps }: any) {
  return (
      <Home>
        <Component {...pageProps} />
      </Home>
  )
}

export default MyApp;
