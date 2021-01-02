import { combineReducers } from 'redux';
import { fetchPosts } from './blogReducers';
import { login } from './authReducers';

const RootReducer = combineReducers({ fetchPosts, login });

export default RootReducer;
