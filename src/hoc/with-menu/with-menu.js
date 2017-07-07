import React from 'react';
import {Menu} from '../../components';

export default View => props => (
  <div className="with-menu">
    <Menu {...props}/>
    <View {...props}/>
  </div>
);

