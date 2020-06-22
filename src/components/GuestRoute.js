import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const GuestRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/events', state: { from: props.location } }} />
  )} />
)
