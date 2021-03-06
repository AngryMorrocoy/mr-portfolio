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
      onSubmit={handleSubmit((formValues) => {
        fetch('/api/send_email/', {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify(formValues),
        }).then((v) => {
          if (v.status === 200) {
            resetField('name');
            resetField('email');
            resetField('message');
            alert('Succesfuly sent message!');
            return
          }
        });
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
