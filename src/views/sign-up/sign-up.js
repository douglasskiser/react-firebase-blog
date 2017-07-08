import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'ramda';
import {firebaseConnect, pathToJS} from 'react-redux-firebase';
import {WithMenu, WithFooter, WithState} from '../../hoc';
import {Grid, Container} from 'semantic-ui-react';
import * as CommonActions from '../../store/actions';
import {SignUpForm, AuthError} from '../../components';

const SignUp = props => (
  <Container>
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Grid>
            <AuthError {...props}/>
            <SignUpForm {...props}/>
          </Grid>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export {
  SignUp
};

const SignUpWithFirebase = firebaseConnect([])(SignUp);

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
  )(SignUpWithFirebase)
);