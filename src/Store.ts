import { create } from 'domain';
import { applyMiddleware, compose, createStore } from 'redux';
import RootReducer from './Reducers/RootReducer'

const Store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);