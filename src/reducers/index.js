import { combineReducers } from 'redux';
import { fetchPosts } from './blogReducers';

const RootReducer = combineReducers({ fetchPosts });

export default RootReducer;
