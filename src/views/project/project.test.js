import React from 'react';
import ReactDOM from 'react-dom';
import { Project } from './project';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Project match={{params: {project: '123'}}} />, div);
});
