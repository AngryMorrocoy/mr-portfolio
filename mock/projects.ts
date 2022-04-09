import { ProjectCardProps } from '../components/ProjectCard';
import blogrImage from '../assets/images/frontend-mentor-blogr-landing-page.png';
import calculatorAppImage from '../assets/images/multi-theme-calculator-app.png';
import dolarVisualizerImage from '../assets/images/dolar-price-visualizer.png';

const projects: ProjectCardProps[] = [
  {
    image: blogrImage,
    badgeText: 'Blogr Landing Page - Frontend Mentor',
    href: 'https://frontend-mentor-blogr-mr.netlify.app/',
  },
  {
    image: calculatorAppImage,
    badgeText: 'Calculator - Frontend Mentor',
    href: 'https://mr-calculatorapp.netlify.app/',
  },
    {
      image: dolarVisualizerImage,
      badgeText: 'Dolar Price Visualizer',
      href: 'https://www.google.com/search?client=firefox-b-d&q=heroku'
    }
];

export default projects;
