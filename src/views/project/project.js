import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import { WithMenu, WithFooter } from '../../hoc';
import * as CommonActions from '../../store/actions';

const Project = props => (
  <div className="about">
    <h1>Project: {props.match.params.project}</h1>
  </div>
);

export {
  Project
};

export default connect(state => ({}), {
  ...CommonActions
})(
  compose(
    WithMenu,
    WithFooter
  )(Project)
);