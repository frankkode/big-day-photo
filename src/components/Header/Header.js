import Link from 'next/link';

import Container from '@components/Container';

import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          
            <a><Image src="/camera.svg" height={57} width={57} alt="logo" /></a>
        </p>
      </Container>
    </header>
  )
}

export default Header;