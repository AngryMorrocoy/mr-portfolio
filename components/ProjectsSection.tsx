import { FunctionComponent } from 'react';
import styles from '../styles/ProjectsSection.module.css';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

type ProjectsSectionProps = {
  id?: string;
};

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  id = '',
}): JSX.Element => {
  const projectObjects: ProjectCardProps[] = [
    { imageUrl: 'wu', badgeText: 'Frontend Mentor Blogr Landing Page' },
    { imageUrl: 'u', badgeText: 'Javascript Made Calculator' },
  ];

  return (
    <div id={id} className={styles.projectsSection}>
      <h2 className="section-title">Projects</h2>
      <div className={styles.projectsContainer}>
        {projectObjects.map((cardProps, idx) => {
          const isLeft = idx % 2 == 0;
          return (
            <ProjectCard
              {...cardProps}
              aligned={isLeft ? 'left' : 'right'}
              className={isLeft ? styles.cardLeft : styles.cardRight}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
