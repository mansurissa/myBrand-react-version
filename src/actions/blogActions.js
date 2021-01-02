import { apiCallGet } from '../api/api';
export const fetchPostsAction = () => (dispatch) => {
  dispatch({ type: 'FETCH_PENDING' });
  apiCallGet('https://issa-portfolio-brand.herokuapp.com/blogs')
    .then((data) => dispatch({ type: 'FETCH_SUCCESS', payload: data }))
    .catch((error) => dispatch({ type: 'FETCH_FAILED', payload: error }));
};
