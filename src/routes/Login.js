import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { PageBanner } from '../components/PageBanner'
import styled from 'styled-components';

const Styles = styled.div`
  .form-group {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FEFFFF;
  }

  .button-custom {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    background-color: #2B7A78;
    border: none;
  }

  .button-custom:active:focus, .button-custom:hover {
    background-color: #17252A;
  }
`;

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch()

  const updateField = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault()
    dispatch(loginUser(user))
  }

  return (
    <Styles>
      <Container>
        <Row>
          <Col>
            <PageBanner
              heading="Login"
              sub="If you don't have an account, signup." />
          </Col>
        </Row>
        <Row>
          <Col className='text-align-center'>
            <Form>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="shadow-none"
                  type="email"
                  placeholder="Enter Email"
                  onChange={updateField}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="shadow-none"
                  type="password"
                  placeholder="Enter Password"
                  onChange={updateField}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <Button
              type="submit"
              onClick={submitForm}
              className='button-custom shadow-none'>
              Login
            </Button>
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}
