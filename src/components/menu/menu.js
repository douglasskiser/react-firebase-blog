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
    name: 'home',
    active: pathName === '/',
    onClick: () => navigate('/'),
    key: 1
  }, {
    name: 'projects',
    active: pathName === '/projects',
    onClick: () => navigate('/projects'),
    key: 2
  }, {
    name: 'contact',
    active: pathName === '/contact',
    onClick: () => navigate('/contact'),
    key: 3
  }]);

  return (
    <Menu secondary>
      <Menu.Item onClick={() => navigate('/')}>
        <div className="logo">Folio</div>
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