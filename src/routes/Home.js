import React from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import { PageBanner } from '../components/PageBanner'
import styled from 'styled-components';

const Styles = styled.div`
  h4 {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #FEFFFF;
  }

  p {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FEFFFF;
  }
`;

export const Home = () => {
  return (
    <Styles>
      <Container>
        <Row>
          <Col>
            <PageBanner
              heading="Welcome to BetTracker"
              sub="Search odds. Save events. Get ahead." />
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}

// rift bold italic - logo
// font-family: rift,sans-serif;
// font-weight: 700;
// font-style: italic;

// rift bold - headings
// font-family: rift,sans-serif;
// font-weight: 700;
// font-style: normal;

// acumin pro reg - paragraphs
// font-family: acumin-pro, sans-serif;
// font-weight: 400;
// font-style: normal;

// acumin pro ex condensed bold - table headings
// font-family: acumin-pro-extra-condensed,sans-serif;
// font-weight: 700;
// font-style: normal;

// acumin pro ex condensed reg - table content
// font-family: acumin-pro-extra-condensed,sans-serif;
// font-weight: 400;
// font-style: normal;
