import { combineReducers } from 'redux';
import postReducer from './postsReducer';

const RootReducer = combineReducers({ postReducer });

export default RootReducer;
