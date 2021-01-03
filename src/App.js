import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainBlog from './components/BlogComponents/MainBlog';
import ReadPost from './components/BlogComponents/ReadPostComponents/ReadPost';
import Home from './components/HomeComponents/Home';
import Login from './components/LoginComponents/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/blog' exact component={MainBlog} />
        <Route path='/blog/read' component={ReadPost} />
      </Switch>
    </Router>
  );
};

export default App;
