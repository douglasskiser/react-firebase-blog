import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from 'semantic-ui-react';
import {map} from 'ramda';

import './menu.css';

const StatelessMenu = ({navigate, history}) => {
  const pathName = history.location.pathname;
  const items = map(item => (
    <Menu.Item {...item}/>
  ), [{
    name: 'portfolio',
    active: pathName === '/portfolio',
    onClick: () => navigate('/portfolio'),
    key: 1
  }, {
    name: 'process',
    active: pathName === '/process',
    onClick: () => navigate('/process'),
    key: 2
  }, {
    name: 'About Me',
    active: pathName === '/about-me',
    onClick: () => navigate('/about-me'),
    key: 3
  }]);

  return (
    <Menu secondary>
      <Menu.Item onClick={() => navigate('/')}>
        <div className="logo">Prifolio</div>
      </Menu.Item>
      <Menu.Menu position="right">
        {items}
      </Menu.Menu>
    </Menu>
  );
};

StatelessMenu.propTypes = {
  activeItem: PropTypes.string,
  setActiveItem: PropTypes.func
};

export default StatelessMenu;