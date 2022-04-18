import { FunctionComponent } from 'react';
import styles from '../styles/SocialGrid.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa/';

const SocialGrid: FunctionComponent<{}> = ({}): JSX.Element => {
  const githubLink = 'https://github.com/AngryMorrocoy/';
  const linkedinLink = 'https://www.linkedin.com/in/manuel-rivas-21740b223/';

  return (
    <div className={styles.socialGrid}>
      <a href={linkedinLink} target="_blank" className={styles.iconContainer}>
        <FaLinkedin />
      </a>
      <a href={githubLink} target="_blank" className={styles.iconContainer}>
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialGrid;
