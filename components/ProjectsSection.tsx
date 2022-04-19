import { FunctionComponent, Fragment } from 'react';
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
    <section id={id} className={styles.projectsSection}>
      <h2 className="section-title">Projects</h2>
      <div className={styles.projectsContainer}>
        {projectObjects.map((cardProps, idx, array) => {
          const isEvenChild = idx % 2 == 0;
          const shouldAddSeparator = array.length - 1 !== idx;
          return (
            <Fragment key={idx}>
              <ProjectCard
                {...cardProps}
                aligned={isEvenChild ? 'left' : 'right'}
                className={isEvenChild ? styles.cardLeft : styles.cardRight}
              />
              {shouldAddSeparator && (
                <LineSeparator
                  className={styles.gridBarSeparator}
                  color="var(--main-color)"
                  width="50%"
                  height=".5rem"
                />
              )}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
