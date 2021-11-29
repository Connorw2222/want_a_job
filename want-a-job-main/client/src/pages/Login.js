import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Form,
  Grid,
  Segment,
  Header,
  Icon,
} from "semantic-ui-react";
import { LOGIN_USER } from "../utils/mutations";
import { useMutation, gql } from "@apollo/client";
import Auth from '../utils/auth';

const LoginForm = props => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };

 return(
  <Container>
    <Grid.Row style={{ maxWidth: 700 }} className="margin-0 margin-top-100">
      <Header as="h2">
        <Icon name="user circle" />
        <Header.Content>
          Login
          <Header.Subheader>
            Please enter your email and password
          </Header.Subheader>
        </Header.Content>
      </Header>
      <Segment placeholder>
        <Grid columns={2} relaxed="very" stackable>
          <Grid.Column>
          <Form onSubmit={handleFormSubmit}>
              <Form.Input
                icon="at"
                iconPosition="left"
                label="Email address"
                name="email"
                value={formState.email}
                placeholder="Email address"
                onChange={handleChange}
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                label="Password"
                name="password"
                value={formState.password}
                type="password"
                placeholder="Password"
                onChange={handleChange}
              />
              <Button content="Login" />
            </Form>
          </Grid.Column>
          <Grid.Column verticalAlign="middle">
            <p className="text-center">New to us? </p>
            <p className="text-center text-bold">Register for an account!</p>
            <Link to="/signup">
              <Button content="Sign up" icon="signup" size="big" />
            </Link>
          </Grid.Column>
        </Grid>
        <Divider vertical>Or</Divider>
      </Segment>
    </Grid.Row>
  </Container>
);
 };

export default LoginForm;
