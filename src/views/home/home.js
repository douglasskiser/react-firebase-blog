import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import selector from './home.selector';
import { Grid, Header, Container } from 'semantic-ui-react';
import * as HomeActions from './home.actions';
import * as CommonActions from '../../store/actions';
import { WithMenu, WithFooter, WithAuth } from '../../hoc';
import {firebaseConnect} from 'react-redux-firebase';

import './home.css';

const Home = ({navigate, firebase}) => (
  <div className="home">
    <Grid>
      <Grid.Row/>
      <Grid.Row>
        <Grid.Column width={8} className="tile" color="purple">
          <Container onClick={() => navigate('/portfolio/my-project')}>
            <Header as="h1">Hey</Header>
          </Container>
        </Grid.Column>
        <Grid.Column width={4} className="tile" color="green" onClick={() => firebase.push('/projects', { text: 'testtest', done: false })}>
          <Header as="h1">Hey</Header>
        </Grid.Column>
        <Grid.Column width={4} className="tile" color="blue">
          <Header as="h1">Hey</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={5} className="tile" color="blue">
          <Header as="h1">Hello</Header>
        </Grid.Column>
        <Grid.Column width={11} className="tile" color="red">
          <Header as="h1">Hello</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

Home.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  navigate: PropTypes.func
};

const HomeWithFirebase = firebaseConnect([{
  path: '/projects'
}])(Home);

export {
  Home
};

export default connect(selector, {
  ...CommonActions,
  ...HomeActions
})(
  compose(
    WithAuth({
      isAuthorized: props => !!props.auth
    }),
    WithMenu,
    WithFooter
  )(HomeWithFirebase)
);
