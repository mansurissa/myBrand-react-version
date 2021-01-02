import About from './about/About';
import Blog from './blog/Blog';
import ContactContainer from './contactpage/ContactContainer';

import ErrorBoundary from './ErrorBoundary';
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

      <ErrorBoundary message={'Ooops...There was error fetching posts'}>
        <Blog />
      </ErrorBoundary>
      <ContactContainer />
    </>
  );
};

export default Home;
