import Navigation from '../Navigation/Navigation';
import Image from 'next/image';
import styles from '@/assets/styles/components/Header.module.css';
import logo from '@/assets/images/logo.png';

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Курсы', href: '/courses' },
  { label: 'Блог', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.wrapper}>
        <Image
          src={logo}
          alt="logo"
          width={157}
          height={76}
          quality={100}
          priority
        />
        <Navigation navLinks={navItems} />
        <button className={styles.btn}>Войти</button>
      </section>
    </header>
  );
};

export default Header;
