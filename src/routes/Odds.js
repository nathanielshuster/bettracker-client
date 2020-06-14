import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../actions/eventActions'
import { getOdds } from '../actions/oddsActions'
import { Container, Row, Col, Form, Spinner } from 'react-bootstrap';
import { OddsContainer } from '../components/OddsContainer'
import { PageBanner } from '../components/PageBanner'

export const Odds = () => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loadingReducer.isLoading)
  const results = useSelector(state => state.oddsReducer.odds)

  useEffect(() => {
    dispatch(getEvents())
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    let index = e.target.selectedIndex;
    let sport = e.target.childNodes[index].id
    if (sport !== 'dontSearch') {
      dispatch(getOdds(sport))
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBanner
            heading="Odds"
            sub="View and compare moneylines." />
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
        { !loading ? <OddsContainer odds={results} /> :
          <Spinner animation="border" role="status" className='m-3'>
            <span className="sr-only">Loading...</span>
          </Spinner>
        }
        </Col>
      </Row>
    </Container>
  )
}
