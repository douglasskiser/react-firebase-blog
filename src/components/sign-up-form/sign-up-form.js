import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Grid} from 'semantic-ui-react';

const onSubmit = (e, {firebase, email = '', password = ''}) => {
  e.preventDefault();
  firebase.createUser({
    email,
    password
  });
};

const SignUpForm = props => {
  const {password, setPassword, email, setEmail} = props;
  return (
    <Grid.Row centered className="sign-up-form">
      <Grid.Column>
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
          <Button className="pull-right"
                  color="grey">
            Sign-Up
          </Button>
        </Form>
      </Grid.Column>
    </Grid.Row>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  setEmail: PropTypes.func,
  setPassword: PropTypes.func
};

export default SignUpForm;