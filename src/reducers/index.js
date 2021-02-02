import { combineReducers } from 'redux';
import {
  fetchPosts,
  fetchOnePost,
  fetchComments,
  fetchSubs,
} from './blogReducers';
import { login } from './authReducers';
import { queries } from './queriesReducer';

const RootReducer = combineReducers({
  fetchPosts,
  login,
  fetchOnePost,
  fetchComments,
  queries,
  fetchSubs,
});

export default RootReducer;
