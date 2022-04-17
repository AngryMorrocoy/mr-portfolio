import { FunctionComponent } from 'react';
import styles from '../styles/ContactSection.module.css';
import TextInput from './TextInput';
import TriangleSeparator from './TriangleSeparator';

type ContactSectionProps = {
  id?: string;
};

const ContactSection: FunctionComponent<ContactSectionProps> = ({
  id = '',
}): JSX.Element => {
  return (
    <div id={id} className={styles.contactSection}>
      <div className={styles.separators}>
        <TriangleSeparator reversed />
        <TriangleSeparator reversed />
      </div>
      <h2 className="section-title">Contact Me :D</h2>
      <div className={styles.contactGrid}>
        <form
          className={styles.formContainer}
          onSubmit={(evt) => {
            evt.preventDefault();
          }}
        >
          <TextInput id="name" labelText="Name" />
          <TextInput id="email" labelText="E-mail" inputType="email" />
          <TextInput
            id="message"
            labelText="Message"
            multiLine
            inputLines={5}
          />
          <input type="submit" value="Send Message" className={styles.formButton} />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
