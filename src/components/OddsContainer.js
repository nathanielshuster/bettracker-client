import React from 'react';
import { Accordion } from 'react-bootstrap';
import { OddCard } from '../components/OddCard'
import styled from 'styled-components';

const Styles = styled.div`
  .no-results {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #FEFFFF;
  }
`;

export const OddsContainer = (props) => {
  const hasResults = props.odds.length > 0

  return (
    <Styles>
      { !hasResults ? <h4 className='no-results'>No Results</h4> :
        <Accordion>
        { props.odds.map((odd, i) => <OddCard key={i} id={i} data={odd} />) }
        </Accordion>
      }
    </Styles>
  )
}
