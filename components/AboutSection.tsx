import { FunctionComponent } from 'react';
import styles from '../styles/AboutSection.module.css';
import LineSeparator from './LineSeparator';
import TriangleSeparator from './TriangleSeparator';

type AboutSectionProps = {
  id?: string;
};

const AboutSection: FunctionComponent<AboutSectionProps> = ({
  id = '',
}): JSX.Element => {
  return (
    <div id={id} className={styles.aboutSection}>
      <div className={styles.topSeparators}>
        <TriangleSeparator reversed />
        <TriangleSeparator reversed />
      </div>
      <h2 className="section-title">About Me</h2>

      <div className={styles.aboutSection__info}>
        <div>
          <p>
            I’m a fullstack self taught developer hailing from Venezuela 🇻🇪 with
            very high but realistic aspirations.
          </p>
          <p>
            I am currently at college studying for a degree in Mechatronic
            Engineering.
          </p>
        </div>
        <LineSeparator width=".3rem" height="23rem" color="var(--main-color)" />

        <p>
          On my journey I've learned some languages like python and the orion
          belt of web development: <i>HTML, CSS and Javascript</i>. Working with
          the last one in both, the frontend and the backend using nodeJS.
        </p>
      </div>
      <div className={styles.botSeparators}>
        <TriangleSeparator />
      </div>
    </div>
  );
};

export default AboutSection;
