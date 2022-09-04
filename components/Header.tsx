import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';

const Header = () => {



  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>
        <Link href={`/`}>
          <a className={headerStyles.link}>
            Behtarino
      </a>
        </Link>
      </h1>
    </header>
  )
}

export default Header
