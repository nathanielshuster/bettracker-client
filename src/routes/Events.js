import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, filterEvents } from '../actions/eventActions'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { EventsContainer } from '../components/EventsContainer'
import { PageBanner } from '../components/PageBanner'
import styled from 'styled-components';

const Styles = styled.div`
  /* @media only screen and (min-width: 768px) {
    .form-group {
      width: 690px;
    }
  } */
`;

export const Events = () => {
  const newUser = useSelector(state => state.registerReducer.newUser)
  const newSession = useSelector(state => state.loginReducer.newSession)
  const results = useSelector(state => state.eventReducer.events)
  const filteredEvents = useSelector(state => state.eventReducer.filteredEvents)

  const dispatch = useDispatch()
  useEffect(() => {
    if (!newUser && !newSession) {
      dispatch(getEvents())
    }
  }, [dispatch, newUser, newSession]);

  const handleChange = (e) => {
    let index = e.target.selectedIndex;
    let sport = e.target.childNodes[index].id
    dispatch(filterEvents(sport, results))
  }

  return (
    <Styles>
      <Container>
        <Row>
          <Col>
            <PageBanner
              heading="Events"
              sub="Monitor your saved events." />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId='sport'>
                <Form.Control as='select' onChange={handleChange} className="shadow-none">
                  <option id='dontSearch'>Select Sport</option>
                  <option id='baseball_mlb'>MLB</option>
                  <option id='mma_mixed_martial_arts'>MMA</option>
                  <option id='basketball_nba'>NBA</option>
                  <option id='basketball_ncaab'>NCAAB</option>
                  <option id='americanfootball_ncaaf'>NCAAF</option>
                  <option id='americanfootball_nfl'>NFL</option>
                  <option id='icehockey_nhl'>NHL</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='justify-content-center text-center'>
          <Col>
            <EventsContainer events={filteredEvents} />
          </Col>
        </Row>
      </Container>
    </Styles>
  )
}
