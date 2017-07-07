import selector from './home.selector';
import { Map } from 'immutable';

it('should map state to props', () => {
  const mapStateToProps = selector({
    counter: Map({
      count: 3
    })
  });
  expect(mapStateToProps.count).toBe(3)
});