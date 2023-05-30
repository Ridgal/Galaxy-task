'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/assets/styles/components/Navigation.module.css';
import '@/assets/styles/config/globals.css';

interface NavLink {
  label: string;
  href: string;
}

interface PropsType {
  navLinks: NavLink[];
}

const Navigation = ({ navLinks }: PropsType) => {
  const pathname = usePathname();

  return (
    <div className={styles.navlink}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : 'link'}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Navigation;
