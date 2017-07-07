import { decrement, increment, INCREMENT, DECREMENT } from './home.actions';

it('should call action to decrement', () => {
  expect(JSON.stringify(
    decrement()
  )).toBe(JSON.stringify({
    type: DECREMENT
  }));
});

it('should call action to increment', () => {
  expect(JSON.stringify(
    increment()
  )).toBe(JSON.stringify({
    type: INCREMENT
  }));
});