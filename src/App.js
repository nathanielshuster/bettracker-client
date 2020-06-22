import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

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
          <GuestRoute path="/signup" component={Signup} />
          <GuestRoute path="/login" component={Login} />
          <PrivateRoute path="/odds" component={Odds} />
          <PrivateRoute path="/events" component={Events} />
          <PrivateRoute path="/profile" component={Profile} />
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default withRouter(App);
