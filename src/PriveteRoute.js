import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
};
const PrivateRoute = ({ component: Component, path, isLoggedIn }) => {
  return (
    <Route
      path={path}
      exact
      render={() => (!isLoggedIn ? <Component /> : <Redirect to='/login' />)}
    />
  );
};

export default connect(mapStateToProps)(PrivateRoute);
