import type { NextPage } from 'next';
import AboutSection from '../components/AboutSection';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';

const Home: NextPage = () => {
  return (
    <>
      <Hero id="start" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
    </>
  );
};

export default Home;
