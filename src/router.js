import React from 'react';
import { map } from 'ramda';
import { Route } from 'react-router';
import { Home, Projects, Contact, Project, Login, SignUp } from './views';

export default props => {
  const routes = map(route => (
    <Route key={route.path} {...route} />
  ), [{
    exact: true,
    path: '/',
    component: Home
  }, {
    exact: true,
    path: '/projects',
    component: Projects
  }, {
    path: '/projects/:project',
    component: Project
  }, {
    path: '/contact',
    component: Contact
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/sign-up',
    component: SignUp
  }]);

  return (
    <div className="router">
      {routes}
    </div>
  );
}
