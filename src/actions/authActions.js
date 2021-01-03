import firebase from '../components/firebase/firebase';

const auth = firebase.auth();

export const loginAction = (email, password) => (dispatch) => {
  dispatch({ type: 'LOGIN_PENDING' });
  auth
    .signInWithEmailAndPassword(email, password)
    .then((user) => dispatch({ type: 'LOGGED_IN', payload: user }))
    .catch((error) =>
      dispatch({ type: 'LOGIN_FAILED', payload: error.message }),
    );
};
