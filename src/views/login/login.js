import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'ramda';
import {firebaseConnect, pathToJS} from 'react-redux-firebase';
import {WithMenu, WithFooter, WithState} from '../../hoc';
import {Grid, Message, Container} from 'semantic-ui-react';
import * as CommonActions from '../../store/actions';
import {LoginForm} from '../../components';

const Login = props => (
  <Container>
    <Grid>
      {!!props.authError && (
        <Grid.Row>
          <Grid.Column>
            <Message negative>
              <Message.Header>Auth Error</Message.Header>
              <p>{props.authError.message}</p>
            </Message>
          </Grid.Column>
        </Grid.Row>
      )}
      <Grid.Row centered>
        <Grid.Column>
          <LoginForm {...props}/>
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
    WithFooter,
    WithState([{
      stateName: 'email',
      setterName: 'setEmail',
      initialState: ''
    }, {
      stateName: 'password',
      setterName: 'setPassword',
      initialState: ''
    }])
  )(LoginWithFirebase)
);