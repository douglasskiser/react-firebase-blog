import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reduxThunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import reducers from './reducers';

const history = createHistory();

const finalReducer = combineReducers(Object.assign({}, reducers, {
  router: routerReducer,
  firebase: firebaseStateReducer
}));

const firebaseConfig = {
  apiKey: 'AIzaSyALXrM7jsqExgO3_4lph_qVBG_q79tiqf0',
  authDomain: 'prifolio-6421f.firebaseapp.com',
  databaseURL: 'https://prifolio-6421f.firebaseio.com',
  projectId: 'prifolio-6421f',
  storageBucket: 'prifolio-6421f.appspot.com',
  messagingSenderId: '538169624299'
};

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
