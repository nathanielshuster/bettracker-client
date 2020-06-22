import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = localStorage.getItem('token')
  return (
    <Route {...rest} render={props => (
      isLoggedIn ? <Component {...props} /> :
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
  )
}
