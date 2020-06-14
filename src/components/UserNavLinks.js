import React from 'react';
import { Nav } from 'react-bootstrap';
import { logoutUser } from '../actions/userActions'

export const UserNavLinks = () => (
  <>
    <Nav.Item><Nav.Link href="/events">Events</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/odds">Odds</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/profile">Profile</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link onClick={logoutUser} href="/">Logout</Nav.Link></Nav.Item>
  </>
)
