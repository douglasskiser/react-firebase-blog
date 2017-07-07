import React from 'react';
import { map } from 'ramda';
import { Route } from 'react-router';
import { Home, Process, AboutMe, Project, Login, SignUp } from './views';

export default props => {
  const routes = map(route => (
    <Route key={route.path} {...route} />
  ), [{
    exact: true,
    path: '/',
    component: Home
  }, {
    path: '/portfolio',
    exact: true,
    component: Home
  }, {
    path: '/portfolio/:project',
    component: Project
  }, {
    path: '/process',
    component: Process
  }, {
    path: '/about-me',
    component: AboutMe
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
