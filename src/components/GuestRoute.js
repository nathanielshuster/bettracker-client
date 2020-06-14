import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const GuestRoute = ({ component: Component, ...rest }) => {
  const hasToken = localStorage.getItem('token')
  return (
    <Route {...rest} render={props => (
      !hasToken
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/events', state: { from: props.location } }} />
    )} />
  )
}
