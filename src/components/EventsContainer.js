import React from 'react';
import { Accordion, Col } from 'react-bootstrap';
import { EventCard } from '../components/EventCard'
import styled from 'styled-components';

const Styles = styled.div`
  .no-results {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #FEFFFF;
  }
`;

export const EventsContainer = (props) => {
  const hasResults = props.events.length > 0

  return (
    <Styles>
      { !hasResults ? <h4 className='no-results'>No Results</h4> :
        <Accordion>
        { props.events.map((event, i) => <Col><EventCard key={i} id={i} data={event} /></Col>) }
        </Accordion>
      }
    </Styles>
  )
}
