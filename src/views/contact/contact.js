import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { WithMenu, WithFooter } from '../../hoc';
import * as CommonActions from '../../store/actions';

const Contact = props => (
  <div className="about">
    <h1>Contact</h1>
  </div>
);

export {
  Contact
};

export default connect(state => ({}), {
  ...CommonActions
})(
  compose(
    WithMenu,
    WithFooter
  )(Contact)
);