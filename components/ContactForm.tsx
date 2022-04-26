import { FunctionComponent } from 'react';
import TextInput from './TextInput';
import styles from '../styles/ContactForm.module.css';
import { useForm } from 'react-hook-form';

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FunctionComponent<any> = ({}): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm<ContactFormValues>();

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit((evt) => {
        resetField('name');
        resetField('email');
        resetField('message');
        console.log(evt);
      })}
    >
      <TextInput
        id="name"
        labelText="Name"
        register={register('name', { required: true })}
      />
      {errors.name?.type === 'required' && (
        <p className={styles.formErrorMessage}>You should provide a name</p>
      )}
      <TextInput
        id="email"
        labelText="E-mail"
        inputType="email"
        register={register('email', {
          pattern: /^.+@.+\..+$/,
          required: true,
        })}
      />
      {errors.email?.type === 'required' && (
        <p className={styles.formErrorMessage}>You should provide an email</p>
      )}
      {errors.email?.type === 'pattern' && (
        <p className={styles.formErrorMessage}>
          You should provide a valid email
        </p>
      )}
      <TextInput
        id="message"
        labelText="Message"
        multiLine
        inputLines={5}
        register={register('message')}
      />
      <input type="submit" value="Send Message" className={styles.formButton} />
    </form>
  );
};

export default ContactForm;
