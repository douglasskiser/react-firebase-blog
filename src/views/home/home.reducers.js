import {Map} from 'immutable';
import createReducer from '../../store/reducers/create';

import { INCREMENT, DECREMENT } from './home.actions';

export default createReducer(Map({count: 0}), {
  [DECREMENT]: state => state.set('count', state.get('count') - 1),
  [INCREMENT]: state => state.set('count', state.get('count') + 1)
});