import { FunctionComponent } from 'react';
import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Navbar from '../components/Header';

type LayoutProps = {
  title: string;
  children?: JSX.Element;
};

const Layout: FunctionComponent<LayoutProps> = ({
  title,
  children,
}): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className={styles.bodyContainer}>{children}</div>
    </>
  );
};

export default Layout;
