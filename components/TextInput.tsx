import { FunctionComponent } from 'react';
import styles from '../styles/TextInput.module.css';

type TextInputProps = {
  labelText: string;
  id: string;
  inputType?: string;
  multiLine?: boolean;
  inputLines?: number;
};

const TextInput: FunctionComponent<TextInputProps> = ({
  id,
  labelText,
  inputLines = 1,
  multiLine = false,
  inputType = 'text',
}): JSX.Element => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>
        {labelText}
      </label>
      <div>
        {multiLine && (
          <textarea id={id} rows={inputLines} className={styles.input} />
        )}
        {!multiLine && <input type={inputType} className={styles.input} />}
      </div>
    </div>
  );
};

export default TextInput;
