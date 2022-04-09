import { FunctionComponent } from 'react';
import styles from '../styles/ProjectsSection.module.css';
import ProjectCard from './ProjectCard';
import projectObjects from '../mock/projects';
import LineSeparator from './LineSeparator';

type ProjectsSectionProps = {
  id?: string;
};

const ProjectsSection: FunctionComponent<ProjectsSectionProps> = ({
  id = '',
}): JSX.Element => {
  return (
    <div id={id} className={styles.projectsSection}>
      <h2 className="section-title">Projects</h2>
      <div className={styles.projectsContainer}>
        {projectObjects.map((cardProps, idx, array) => {
          const isEvenChild = idx % 2 == 0;
          return (
            <>
              <ProjectCard
                {...cardProps}
                aligned={isEvenChild ? 'left' : 'right'}
                className={isEvenChild ? styles.cardLeft : styles.cardRight}
                key={idx}
              />
              {array.length - 1 !== idx && (
                <LineSeparator
                  className={styles.gridBarSeparator}
                  color="var(--main-color)"
                  width="50%"
                  height=".5rem"
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
