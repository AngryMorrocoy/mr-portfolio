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
      </Head>
      <Navbar />
      <div className={styles.bodyContainer}>{children}</div>
    </>
  );
};

export default Layout;
