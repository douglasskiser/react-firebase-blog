import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { WithMenu, WithFooter } from '../../hoc';
import * as CommonActions from '../../store/actions';

const Process = props => (
  <div className="about">
    <h1>Process</h1>
  </div>
);

export {
  Process
};

export default connect(state => ({}), {
  ...CommonActions
})(
  compose(
    WithMenu,
    WithFooter
  )(Process)
);