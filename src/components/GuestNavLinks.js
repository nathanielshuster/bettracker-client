import React from 'react';
import { Nav } from 'react-bootstrap';

export const GuestNavLinks = () => (
  <>
    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
    <Nav.Item><Nav.Link href="/signup">Signup</Nav.Link></Nav.Item>
  </>
)
