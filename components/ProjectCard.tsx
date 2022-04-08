import { FunctionComponent } from 'react';
import styles from '../styles/ProjectCard.module.css';

export type ProjectCardProps = {
  aligned?: 'left' | 'right';
  className?: string;
  imageUrl: string;
  badgeText: string;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  aligned = 'left',
  imageUrl,
  badgeText,
  className,
}): JSX.Element => {
  return (
    <div className={`${styles.projectCard} ${className}`}>
      <div className={styles.image}></div>
      <span className={`${styles.badge} ${styles[aligned]}`}>{badgeText}</span>
    </div>
  );
};

export default ProjectCard;
