import createStore, {history} from './create';

it('should return an object for history', () => {
  expect(typeof history).toBe('object');
});

it('should return an object for history', () => {
  expect(typeof createStore({})).toBe('object');
});
