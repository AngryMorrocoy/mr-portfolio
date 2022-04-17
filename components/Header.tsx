import { FunctionComponent } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Navbar: FunctionComponent<any> = ({}): JSX.Element => {
  const navLinksText = [
    { title: 'Start', href: '#start' },
    {
      title: 'About',
      href: '#about',
    },
    {
      title: 'Projects',
      href: '#projects',
    },
    {
      title: 'Contact',
      href: '#contact',
    },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          {navLinksText.map((navItemData, idx) => {
            return (
              <li className={styles.navLink} key={idx}>
                <Link href={navItemData.href}>{navItemData.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
