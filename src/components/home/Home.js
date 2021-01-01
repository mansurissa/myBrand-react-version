import About from './about/About';
import Blog from './Blog';
import Landing from './Landing';
import NavUser from './NavUser';
import ProjectsContainer from './projects/ProjectsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions';

const Home = () => {
  const fetchedPosts = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  return (
    <>
      <NavUser />
      <Landing />
      <About />
      <ProjectsContainer />
      <Blog />
      <div>
        <p>Hello Dear gang ,{fetchedPosts}</p>
        <button onClick={() => dispatch(getPosts())}>+</button>
      </div>
    </>
  );
};

export default Home;
