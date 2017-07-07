import selector from './home.selector';

it('should map state to props', () => {
  const mapStateToProps = selector({
    firebase: {}
  });
  expect(typeof mapStateToProps.auth).toBe('object');
  expect(typeof mapStateToProps.projects).toBe('object')
});