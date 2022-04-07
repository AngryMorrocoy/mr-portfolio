import { FunctionComponent } from 'react';
import styles from '../styles/LineSeparator.module.css';

type LineSeparatorProps = {
  width: number | string;
  height: number | string;
  color: string;
  className?: string;
};

const LineSeparator: FunctionComponent<LineSeparatorProps> = ({
  width,
  height,
  color,
  className
}): JSX.Element => {
  return (
    <div
      className={`${styles.lineSeparator} ${className}`}
      style={
        {
          width,
          height,
          '--separator-color': color,
        } as React.CSSProperties
      }
    ></div>
  );
};

export default LineSeparator;
