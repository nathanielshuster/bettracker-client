import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import styled from 'styled-components'
import gwap from '../assets/gwap.jpg'

const Styles = styled.div`
  .jumbotron {
    
  }
`;

export const Jumbo = () => {
  return (
    <Jumbotron className="m-0" style={{ backgroundImage: `url(${gwap})`, backgroundSize: 'cover' }} fluid>
    </Jumbotron>
  )
}
