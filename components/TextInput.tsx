import { FunctionComponent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ContactFormValues } from './ContactForm';
import styles from '../styles/TextInput.module.css';

type TextInputProps = {
  labelText: string;
  id: string;
  inputType?: string;
  multiLine?: boolean;
  inputLines?: number;
  register: ReturnType<UseFormRegister<ContactFormValues>>;
};

const TextInput: FunctionComponent<TextInputProps> = ({
  id,
  labelText,
  register,
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
          <textarea
            id={id}
            rows={inputLines}
            className={styles.input}
            {...register}
          />
        )}
        {!multiLine && (
          <input type={inputType} className={styles.input} {...register} />
        )}
      </div>
    </div>
  );
};

export default TextInput;
