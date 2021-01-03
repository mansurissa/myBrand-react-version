import { combineReducers } from 'redux';
import { fetchPosts, fetchOnePost, fetchComments } from './blogReducers';
import { login } from './authReducers';

const RootReducer = combineReducers({
  fetchPosts,
  login,
  fetchOnePost,
  fetchComments,
});

export default RootReducer;
