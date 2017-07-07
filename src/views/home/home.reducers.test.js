import reducer from './home.reducers';
import { Map } from 'immutable';
import { INCREMENT, DECREMENT } from './home.actions';

it('should increment count state', () => {
  expect(
    JSON.stringify(reducer(Map({count: 0}), {
      type: INCREMENT
    }).toJS())
  ).toBe(
    JSON.stringify(Map({count: 1}).toJS())
  );
});

it('should decrement count state', () => {
  expect(
    JSON.stringify(reducer(Map({count: 1}), {
      type: DECREMENT
    }).toJS())
  ).toBe(
    JSON.stringify(Map({count: 0}).toJS())
  );
});