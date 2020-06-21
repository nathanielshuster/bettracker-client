import React from 'react'
import { Switch } from 'react-router-dom'
import { withRouter, Redirect } from "react-router"

import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'

import { AlertNotifcation } from './components/AlertNotification'

import { GuestRoute } from './components/GuestRoute'
import { Home } from './routes/Home'
import { Signup } from './routes/Signup'
import { Login } from './routes/Login'

import { PrivateRoute } from './components/PrivateRoute'
import { Odds } from './routes/Odds'
import { Events } from './routes/Events'
import { Profile } from './routes/Profile'

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <AlertNotifcation />
      <Layout>
        <Switch>
          <GuestRoute exact path="/" component={Home} />
          <GuestRoute exact path="/signup" component={Signup} />
          <GuestRoute exact path="/login" component={Login} />
          <PrivateRoute exact path="/odds" component={Odds} />
          <PrivateRoute exact path="/events" component={Events} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default withRouter(App);
