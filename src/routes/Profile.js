import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../actions/userActions';
import { updateUser } from '../actions/userActions';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import { PageBanner } from '../components/PageBanner';
import styled from 'styled-components';

const Styles = styled.div`
  .form-group {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FEFFFF;
  }

  td {
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

export const Profile = () => {
  const dispatch = useDispatch();
  const currentInfo = useSelector(state => state.userReducer.user)
  const [edit, setEdit] = useState(false)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  const [user, setUser] = useState({ username: '', email: '' });
  const updateField = e => {
    setUser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const updateInfo = (e) => {
    console.log(user)
    e.preventDefault()
    dispatch(updateUser(user))
  }

  return (
    <Styles>
      <Container>
        <Row>
          <Col>
            <PageBanner
              heading="Profile"
              sub="View or edit your profile."/>
          </Col>
        </Row>
        <Row>
          <Col>
            { !edit ?
              <Table>
                <tbody>
                  <tr>
                    <td>Username:</td>
                    <td className="text-right">{currentInfo.username}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td className="text-right">{currentInfo.email}</td>
                  </tr>
                </tbody>
              </Table> :
              <Form>
                <Form.Group controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    className="shadow-none"
                    type="username"
                    placeholder={currentInfo.username}
                    onChange={updateField}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    className="shadow-none"
                    type="email"
                    placeholder={currentInfo.email}
                    onChange={updateField}
                  />
                </Form.Group>
              </Form>
            }
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            { !edit ?
              <Button
                className='mr-1 mt-3 shadow-none button-custom'
                onClick={() => setEdit(true)}>
                Edit
              </Button> :
              <>
                <Button
                  className='mr-1 mt-3 shadow-none button-custom'
                  onClick={updateInfo}>
                  Update
                </Button>
                <Button
                  className='ml-1 mt-3 shadown-none button-custom'
                  onClick={() => setEdit(false)}>
                  Done
                </Button>
              </>
            }
          </Col>
        </Row>
      </Container>
    </Styles>
  )
};
