import { apiCallGet } from '../api/api';
export const fetchPostsAction = () => (dispatch) => {
  dispatch({ type: 'FETCH_PENDING' });
  apiCallGet('https://issa-portfolio-brand.herokuapp.com/blogs')
    .then((data) =>
      dispatch({ type: 'FETCH_SUCCESS', payload: data.data.posts }),
    )
    .catch((error) => dispatch({ type: 'FETCH_FAILED', payload: error }));
};

export const fetchOnePostAction = (postId) => (dispatch) => {
  dispatch({ type: 'FETCH_ONE_PENDING' });
  apiCallGet(`https://issa-portfolio-brand.herokuapp.com/blogs/${postId}`)
    .then((data) => {
      dispatch({ type: 'FETCH_ONE_SUCCESS', payload: data.data });
    })
    .catch((error) => dispatch({ type: 'FETCH_ONE_FAILED', payload: error }));
};

export const fetchCommentsAction = (postId) => (dispatch) => {
  dispatch({ type: 'FETCH_COMMENTS_PENDING' });
  apiCallGet(
    `https://issa-portfolio-brand.herokuapp.com/blogs/${postId}/allComments`,
  )
    .then((data) => {
      dispatch({ type: 'FETCH_COMMENTS_SUCCESS', payload: data });
    })
    .catch((error) =>
      dispatch({ type: 'FETCH_COMMENTS_FAILED', payload: error.message }),
    );
};
