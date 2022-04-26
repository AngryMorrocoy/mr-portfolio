import Image, { StaticImageData } from 'next/image';
import { FunctionComponent } from 'react';
import styles from '../styles/ProjectCard.module.css';

export type ProjectCardProps = {
  aligned?: 'left' | 'right';
  className?: string;
  href: string;
  image: string | StaticImageData;
  badgeText: string;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  aligned = 'left',
  href,
  image,
  badgeText,
  className,
}): JSX.Element => {
  return (
    <a
      className={`${styles.projectCard} ${className}`}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <div className={styles.imageContainer}>
        <Image src={image} layout="fill" />
      </div>
      <span className={`${styles.badge} ${styles[aligned]}`}>{badgeText}</span>
    </a>
  );
};

export default ProjectCard;
