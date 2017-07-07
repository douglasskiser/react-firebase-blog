import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    history: {location: {pathname: 'home'}}
  };
  ReactDOM.render(<Menu {...props}/>, div);
});
