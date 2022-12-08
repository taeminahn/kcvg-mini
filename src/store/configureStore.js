import {applyMiddleware, compose, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createWrapper} from "next-redux-wrapper";
import reducer from '../reducers/index';

const configureStore = () => {
  const middlewaes = []; // redux-saga 사용할 때 씀
  const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewaes))
    : composeWithDevTools(applyMiddleware(...middlewaes))
  const store = createStore(reducer, enhancer);
  return store;
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
});

export default wrapper;