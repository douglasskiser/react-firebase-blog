import React from 'react';
import {Footer} from '../../components';

export default View => props => (
  <div className="with-footer">
    <View {...props}/>
    <Footer/>
  </div>
);

