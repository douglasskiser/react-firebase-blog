import React, { Component } from 'react';
import { reduce, merge } from 'ramda';

export default stateConfig => StatelessComponent => {
  return class WithState extends Component {
    constructor (props) {
      super(props);
      this.state = reduce((componentState, {stateName, initialState}) => {
          componentState[stateName] = initialState;
          return componentState;
        }, {}, stateConfig);
    }

    render () {
      return (
        <StatelessComponent
          {...this._getProps()}
          {...this._getStateSetMethods()}/>
      )
    }

    _getProps () {
      return merge(this.state, this.props, {});
    }

    _getStateSetMethods () {
      return reduce((componentState, config) => {
        componentState[config.setterName] = this._getSetterMethod(config);
        return componentState
      }, {}, stateConfig);
    }

    _getSetterMethod({stateName}) {
      return (val, cb) => {
        return this.setState(() => ({[stateName]: val}), () => cb && cb());
      };
    }
  }
}
