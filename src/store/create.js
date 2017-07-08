import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import reducers from './reducers';
import firebaseConfig from '../firebase-config';

const history = createHistory();

const finalReducer = combineReducers(Object.assign({}, reducers, {
  router: routerReducer,
  firebase: firebaseStateReducer
}));

const WithReactReduxFirebase = reactReduxFirebase(firebaseConfig, {
  userProfile: 'users'
});

const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    reduxThunkMiddleware,
    routerMiddleware(history)
  )
);

const createStoreWithFirebase = compose(
  WithReactReduxFirebase
)(createStore);

export default initialState => createStoreWithFirebase(
  finalReducer,
  initialState,
  enhancer
);

export {
  history
};
