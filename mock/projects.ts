import { ProjectCardProps } from '../components/ProjectCard';
import blogrImage from '../assets/images/frontend-mentor-blogr-landing-page.png';
import calculatorAppImage from '../assets/images/multi-theme-calculator-app.png';
import dolarVisualizerImage from '../assets/images/dolar-price-visualizer.png';
import todoAppImage from '../assets/images/todo-app.png';

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
    href: 'https://dolar-visualizer.herokuapp.com/',
  },
  {
    image: todoAppImage,
    badgeText: 'FullStack Todo App',
    href: 'https://mr-todo-app.herokuapp.com/'
  }
];

export default projects;
