import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'semantic-ui-react';

const onSubmit = (e, {firebase, email, password}) => {
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

const LoginForm = (props) => {
  const {password, setPassword, email, setEmail} = props;
  return !props.auth
    ? (
      <Form onSubmit={(e) => onSubmit(e, props)}>
        <Form.Input placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e, {value}) => setEmail(value)}/>
        <Form.Input placeholder='Password'
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e, {value}) => setPassword(value)}/>
        <Button className="pull-right">
          Login
        </Button>
        <Button type="submit"
                onClick={e => signUp(e, props)}
                className="pull-right">
          Sign-Up
        </Button>
      </Form>
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

export default LoginForm;