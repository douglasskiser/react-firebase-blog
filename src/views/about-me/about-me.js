import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { WithMenu, WithFooter } from '../../hoc';
import * as CommonActions from '../../store/actions';

const AboutMe = props => (
  <div className="about">
    <h1>Process</h1>
  </div>
);

export {
  AboutMe
};

export default connect(state => ({}), {
  ...CommonActions
})(
  compose(
    WithMenu,
    WithFooter
  )(AboutMe)
);