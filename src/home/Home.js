import About from './about/About';
import Landing from './Landing';
import NavUser from './NavUser';
import ProjectsContainer from './projects/ProjectsContainer';

const Home = () => {
  return (
    <>
      <NavUser />
      <Landing />
      <About />
      <ProjectsContainer />
    </>
  );
};

export default Home;
