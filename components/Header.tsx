import { FunctionComponent } from 'react';
import styles from '../styles/Header.module.css';

const Navbar: FunctionComponent<any> = ({}): JSX.Element => {
  const navLinksText = ['Start', 'About', 'Projects', 'Contact'];

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navbar}>
          {navLinksText.map((navText, idx) => {
            return (
              <li className={styles.navLink} key={idx}>
                {navText}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
