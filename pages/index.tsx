import type { NextPage } from 'next';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';

const Home: NextPage = () => {
  return (
    <>
      <Hero id="start" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <ContactSection id="contact" />
    </>
  );
};

export default Home;
