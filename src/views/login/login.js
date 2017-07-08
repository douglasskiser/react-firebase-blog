import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'ramda';
import {firebaseConnect, pathToJS} from 'react-redux-firebase';
import {WithMenu, WithFooter} from '../../hoc';
import {Grid, Container} from 'semantic-ui-react';
import * as CommonActions from '../../store/actions';
import {LoginForm, AuthError} from '../../components';

const Login = props => (
  <Container>
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Grid>
            <AuthError {...props}/>
            <LoginForm {...props}/>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export {
  Login
};

const LoginWithFirebase = firebaseConnect([])(Login);

export default connect(({firebase}) => ({
  authError: pathToJS(firebase, 'authError'),
  auth: pathToJS(firebase, 'auth'),
  profile: pathToJS(firebase, 'profile')
}), {
  ...CommonActions
})(
  compose(
    WithMenu,
    WithFooter
  )(LoginWithFirebase)
);