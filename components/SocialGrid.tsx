import { FunctionComponent } from 'react';
import styles from '../styles/SocialGrid.module.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa/';

const SocialGrid: FunctionComponent<{}> = ({}): JSX.Element => {
  return (
    <div className={styles.socialGrid}>
      <div className={styles.iconContainer}>
        <FaLinkedin />
      </div>
      <div className={styles.iconContainer}>
        <FaTwitter />
      </div>
      <div className={styles.iconContainer}>
        <FaGithub />
      </div>
    </div>
  );
};

export default SocialGrid;
