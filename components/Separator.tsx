import { FunctionComponent } from 'react';
import styles from '../styles/TriangleSeparator.module.css';

type SeparatorProps = {
  reversed?: boolean;
};

const TriangleSeparator: FunctionComponent<SeparatorProps> = ({
  reversed = false,
}): JSX.Element => {
  return (
    <div className={`${styles.separator} ${reversed ? styles.reversed : ''}`}>
      <div className={styles.triangleUp} />
      <div className={styles.triangleDown} />
    </div>
  );
};

export default TriangleSeparator;
