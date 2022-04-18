import { FunctionComponent } from 'react';
import TextInput from './TextInput';
import styles from '../styles/ContactForm.module.css';

const ContactForm: FunctionComponent<any> = ({}): JSX.Element => {
  return (
    <form
      className={styles.formContainer}
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <TextInput id="name" labelText="Name" />
      <TextInput id="email" labelText="E-mail" inputType="email" />
      <TextInput id="message" labelText="Message" multiLine inputLines={5} />
      <input type="submit" value="Send Message" className={styles.formButton} />
    </form>
  );
};

export default ContactForm;
