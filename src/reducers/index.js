import { combineReducers } from 'redux';
import { fetchPosts, fetchOnePost } from './blogReducers';
import { login } from './authReducers';

const RootReducer = combineReducers({ fetchPosts, login, fetchOnePost });

export default RootReducer;
