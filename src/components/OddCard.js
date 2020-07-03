import React, { useState } from 'react';
import { Card, Button, Accordion, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../actions/eventActions'
import styled from 'styled-components';

import {
  dateConverter,
  timeConverter,
  getAwayTeam,
  formatLines,
  isEvent,
  sanitizeSites
} from '../helpers/helpers'

const Styles = styled.div`
  .card {
    border: none;
  }

  .card-header {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #17252A;
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

  .button-custom {
    font-family: rift,sans-serif;
    font-weight: 700;
    font-style: normal;
    background-color: #2B7A78;
    border: none;
  }

  .button-custom:active:focus, .button-custom:hover {
    background-color: #17252A;
  }
`;

export const OddCard = (props) => {
  const events = useSelector(state => state.eventReducer.events)
  const odd = props.data
  const [buttonDisabled, setButtonDisabled] = useState(isEvent(events, odd))
  const [newOdd] = useState({
    sport: props.data.sport_key,
    sport_nice: props.data.sport_nice,
    home_team: props.data.home_team,
    away_team: getAwayTeam(props.data.teams, props.data.home_team),
    unix_time: props.data.commence_time,
    sites_attributes: sanitizeSites(props.data.sites, props.data.teams, props.data.home_team)
  });

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(createEvent(newOdd))
    setButtonDisabled(true)
  }

  return (
    <Styles>
      <Card className='mb-3'>
        <Card.Header>{dateConverter(newOdd.unix_time)} - {timeConverter(newOdd.unix_time)}</Card.Header>
        <Card.Body>
          <Card.Title>{newOdd.away_team} at {newOdd.home_team}</Card.Title>
          <Accordion.Toggle
            as={Button}
            eventKey={props.id}
            className='mr-1 shadow-none button-custom'>
            View
          </Accordion.Toggle>
          <Button
            onClick={handleClick}
            disabled={buttonDisabled}
            variant='success'
            className='ml-1 shadow-none button-custom'>
            { buttonDisabled ? "Saved" : "Save" }
          </Button>
          <Accordion.Collapse eventKey={props.id}>
            <ListGroup className='mt-2' variant="flush">
              { newOdd.sites_attributes.map((site, i) =>
                <ListGroup.Item key={i}>
                  {site.site_nice}: {formatLines(site.away_line, site.home_line)}
                </ListGroup.Item>)
              }
            </ListGroup>
          </Accordion.Collapse>
        </Card.Body>
        <Card.Footer className="text-muted">
          {newOdd.sites_attributes.length} {newOdd.sites_attributes.length > 1 ? "Moneylines" : "Moneyline"}
        </Card.Footer>
      </Card>
    </Styles>
  )
}
