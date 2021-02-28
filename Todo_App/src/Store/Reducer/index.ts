import { combineReducers } from 'redux';
import todoReducer from './TodoReducer';

const RootReducer = combineReducers({
  todo: todoReducer
});

export default RootReducer;