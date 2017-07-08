import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { WithMenu, WithFooter } from '../../hoc';
import * as CommonActions from '../../store/actions';

const Projects = props => (
  <div className="about">
    <h1>Process</h1>
  </div>
);

export {
  Projects
};

export default connect(state => ({}), {
  ...CommonActions
})(
  compose(
    WithMenu,
    WithFooter
  )(Projects)
);