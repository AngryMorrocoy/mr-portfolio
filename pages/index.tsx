import type { NextPage } from 'next';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Hero id="start" />
      <AboutSection id="about" />
    </>
  );
};

export default Home;
