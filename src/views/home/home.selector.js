import { defaultSelector } from '../../store/selectors';
import { merge } from 'ramda';
import {dataToJS, pathToJS} from 'react-redux-firebase';

const home = state => {
  const {firebase} = state;
  return merge({
    projects: dataToJS(firebase, 'projects'),
    auth: pathToJS(firebase, 'auth')
  }, defaultSelector(state), {});
};

export default home;