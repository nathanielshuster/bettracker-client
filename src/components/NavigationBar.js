import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserNavLinks } from './UserNavLinks'
import { GuestNavLinks } from './GuestNavLinks'
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #17252A;
  }

  .navbar-brand {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: italic;
    color: #FEFFFF;
  }

  .navbar-nav .nav-link {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #FEFFFF;
  }
`;

export const NavigationBar = () => {
  const isLoggedIn = !!localStorage.token

  return (
    <Styles>
      <Navbar>
        <Navbar.Brand href="/">BetTracker</Navbar.Brand>
          <Nav className="ml-auto">
            { isLoggedIn ? <UserNavLinks /> : <GuestNavLinks /> }
          </Nav>
      </Navbar>
    </Styles>
  )
}
