import { FunctionComponent } from 'react';
import styles from '../styles/ContactSection.module.css';
import ContactForm from './ContactForm';
import TriangleSeparator from './TriangleSeparator';
import SocialGrid from './SocialGrid';

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
        <ContactForm />
        <SocialGrid />
      </div>
    </div>
  );
};

export default ContactSection;
