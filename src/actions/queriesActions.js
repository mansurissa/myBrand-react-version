import firebase from '../components/firebase/firebase';

const ref = firebase.firestore().collection('Queries');

export const getQueriesAction = () => (dispatch) => {
  dispatch({ type: 'QUERIES_PENDING' });
  ref.onSnapshot((result) =>
    dispatch({ type: 'QUERIES_SUCCESS', payload: result }),
  );
};
