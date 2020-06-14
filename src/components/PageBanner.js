import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbotron {
    background-color: #3AAFA9;
    margin: 0px;
  }

  .heading {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #FEFFFF;
  }

  .sub {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FEFFFF;
  }
`;

export const PageBanner = (props) => (
  <Styles>
    <Jumbotron fluid>
      <Container>
        <h2 className='heading text-center'>{props.heading}</h2>
        { props.sub ? <p className='sub text-center'>{props.sub}</p> : null }
      </Container>
    </Jumbotron>
  </Styles>
);
