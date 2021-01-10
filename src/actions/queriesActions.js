import firebase from '../components/firebase/firebase';

const ref = firebase.firestore().collection('Queries');

export const getQueriesAction = () => (dispatch) => {
  dispatch({ type: 'QUERIES_PENDING' });
  ref.onSnapshot((result) => {
    const data = [];
    result.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: 'QUERIES_SUCCESS', payload: data });
  });
};
