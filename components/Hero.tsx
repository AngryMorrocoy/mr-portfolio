import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

type HeroProps = {
  id?: string;
};

const Hero: FunctionComponent<HeroProps> = ({ id = '' }): JSX.Element => {
  return (
    <section id={id} className={styles.hero}>
      <div className={styles.description}>
        <p>
          Hi, I'm <span className={styles.remarkName}>Manuel Rivas.</span>
        </p>
        <p>Web Developer.</p>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/favicon.ico" width="1" height="1" layout="responsive" />
      </div>
    </section>
  );
};

export default Hero;