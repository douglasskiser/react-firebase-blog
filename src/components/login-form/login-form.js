import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid} from 'semantic-ui-react';
import WithState from '../../hoc/with-state';
import {compose} from 'ramda';

import './login-form.css';

const login = (e, {firebase, email, password}) => {
  e.preventDefault();
  firebase.login({
    email,
    password
  });
};

const logout = props => {
  props.firebase.logout();
  props.setEmail('');
  props.setPassword('');
};

const signUp = (e, {navigate}) => {
  e.preventDefault();
  navigate('/sign-up');
};

const LoginForm = props => {
  const {password, setPassword, email, setEmail} = props;
  return !props.auth
    ? (
      <Grid.Row centered className="login-form">
        <Grid.Column>
          <Form>
            <Form.Input placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e, {value}) => setEmail(value)}/>
            <Form.Input placeholder='Password'
                        name="password"
                        type="password"
                        value={password}
                        onChange={(e, {value}) => setPassword(value)}/>
            <Button onClick={(e) => login(e, props)}
                    color="teal"
                    className="pull-right">
              Login
            </Button>
            <Button onClick={e => signUp(e, props)}
                    color="grey"
                    className="pull-right sign-up-btn">
              Sign-Up
            </Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    )
    : (
      <div>
        <h1>Your logged in</h1>
        <Button onClick={() => logout(props)}>
          Logout
        </Button>
      </div>
    );
};

LoginForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func
};

export default compose(
  WithState([{
    stateName: 'email',
    setterName: 'setEmail',
    initialState: ''
  }, {
    stateName: 'password',
    setterName: 'setPassword',
    initialState: ''
  }])
)(LoginForm);