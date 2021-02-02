import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Admin/dashboardComponents/Dashboard';
import EditPost from './components/Admin/EditPost';
import EditProfile from './components/Admin/EditProfile';
import NewPost from './components/Admin/NewPost';
import Queries from './components/Admin/Queries';
import MainBlog from './components/BlogComponents/MainBlog';
import ReadPost from './components/BlogComponents/ReadPostComponents/ReadPost';
import Home from './components/HomeComponents/Home';
import Login from './components/LoginComponents/Login';
import PriveteRoute from './PriveteRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/blog' exact component={MainBlog} />
        <Route path='/blog/read' component={ReadPost} />
        <PriveteRoute path='/dashboard' exact component={Dashboard} />
        <PriveteRoute path='/dashboard/newPost' exact component={NewPost} />
        <PriveteRoute path='/dashboard/editPost' component={EditPost} />
        <PriveteRoute path='/editProfile' exact component={EditProfile} />
        <PriveteRoute path='/dashboard/queries' exact component={Queries} />
      </Switch>
    </Router>
  );
};

export default App;
