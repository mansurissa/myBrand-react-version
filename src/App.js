import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/HomeComponents/Home';
import Login from './components/LoginComponents/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
