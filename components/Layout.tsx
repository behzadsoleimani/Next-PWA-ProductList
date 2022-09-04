import Header from './Header'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }: any) => {
  return (
    <>
      <div className={styles.container}>
          <Header />
          {children}
      </div>
    </>
  )
}

export default Layout
