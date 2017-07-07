import defaultSelector from './default-selector';

it('should return the default selector object', () => {
  const state = {router: {test: 'success'}};
    expect(
      JSON.stringify(defaultSelector(state))
    ).toBe(
      JSON.stringify(state)
    );
});