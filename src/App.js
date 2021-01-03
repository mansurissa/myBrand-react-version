import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Admin/Dashboard';
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
      </Switch>
    </Router>
  );
};

export default App;
