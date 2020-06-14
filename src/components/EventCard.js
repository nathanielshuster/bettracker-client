import React, { useState } from 'react';
import { Card, Button, Accordion, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../actions/eventActions'
import styled from 'styled-components';

import {
  dateConverter,
  timeConverter,
  formatLines
} from '../helpers/helpers'

const Styles = styled.div`
  .card {
    border: none;
  }

  .card-header {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #2B7A78;
    color: #FEFFFF;
    border: none;
  }

  .card-title {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    color: #2B7A78;
  }

  .text-muted {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #DEF2F1;
    color: #2B7A78;
  }

  .site-lines {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #17252A;
  }

  .mr-1 {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    background-color: #2B7A78;
    border: none;
  }

  .mr-1:active:focus, .mr-1:hover {
    background-color: #17252A;
  }
`;

export const EventCard = (props) => {
  const data = props.data
  const [sites] = useState(data.sites);
  const [show, setShow] = useState(true);
  const [event] = useState({
    sport: data.sport,
    sport_nice: data.sport_nice,
    home_team: data.home_team,
    away_team: data.away_team,
    unix_time: data.unix_time
  });

  const dispatch = useDispatch()
  const handleClick = () => {
    setShow(false)
    dispatch(deleteEvent(event))
  }

  return (
    <>
    { !show ? null :
      <Styles>
        <Card className='mb-3'>
          <Card.Header>{dateConverter(event.unix_time)} - {timeConverter(event.unix_time)}</Card.Header>
          <Card.Body>
            <Card.Title>{event.away_team} at {event.home_team}</Card.Title>
            <Accordion.Toggle
              as={Button}
              eventKey={props.id}
              className='mr-1 shadow-none'>
              View
            </Accordion.Toggle>
            <Button
              onClick={handleClick}
              variant='danger'
              className='mr-1 shadow-none'>
              Delete
            </Button>
            <Accordion.Collapse eventKey={props.id}>
              <ListGroup className='mt-2' variant="flush">
                { sites.map((site, i) =>
                  <ListGroup.Item key={i}>
                    {site.site_nice}: {formatLines(site.away_line, site.home_line)}
                  </ListGroup.Item>)
                }
              </ListGroup>
            </Accordion.Collapse>
          </Card.Body>
          <Card.Footer className="text-muted">
            {sites.length} {sites.length > 1 ? "Moneylines" : "Moneyline"}
          </Card.Footer>
        </Card>
      </Styles>
    }
    </>
  )
}
