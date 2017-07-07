import React from 'react';
import ReactDOM from 'react-dom';
import { Process } from './process';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Process />, div);
});
