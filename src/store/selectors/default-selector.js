import { merge } from 'ramda';

const defaultSelector = state => merge({
  router: state.router
}, {});

export default defaultSelector;