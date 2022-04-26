import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=0.4" />
      </Head>
      <Layout title="Manuel Rivas - Web Developer">
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
