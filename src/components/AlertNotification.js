import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .alert {
    font-family: acumin-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    border-radius: 0px;
  }
`;

export const AlertNotifcation = () => {
  const hasAlert = useSelector(state => state.alertReducer.hasAlert)
  const variant = useSelector(state => state.alertReducer.variant)
  const message = useSelector(state => state.alertReducer.message)

  return (
    <Styles>
      { !hasAlert ? null : <Alert className='text-center' variant={variant}>{message}</Alert> }
    </Styles>
  )
}
