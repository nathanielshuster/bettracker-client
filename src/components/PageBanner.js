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
    color: #17252A;
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
      <h1 className='heading text-left m-0'>{props.heading}</h1>
      { props.sub ? <h5 className='sub text-left'>{props.sub}</h5> : null }
    </Jumbotron>
  </Styles>
);
