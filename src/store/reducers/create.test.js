import createReducer from './create';
import {Map} from 'immutable';

const reducer = createReducer(Map({}), {
  ['Test'](state, {test}) {
    return Object.assign({}, state, {test});
  }
});

it('should return a reducer', () => {
  expect(typeof reducer).toBe('function');
});

it('should return new state when an action is called', () => {
  expect(
    JSON.stringify(reducer({}, {
      type: 'Test',
      test: 'success'
    }))
  ).toBe(
    JSON.stringify({test: 'success'})
  );
})
