import HomePage from '@/components/pages/home/HomePage';
import AboutPage from '@/components/pages/about/AboutPage';
import NaveBar from '@/components/header/pieces/NavBar';
import "./home.scss"
import ProjectsPage from '@/components/pages/projects/ProjectsPage';


export default function Home() {
  return (
    <div className='main-global'>
      <HomePage/>
      
      <ProjectsPage />
      
      <AboutPage />
    </div>
  );
}
