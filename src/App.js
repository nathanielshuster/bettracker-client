import React from 'react';
import { Switch, Redirect } from 'react-router'
import { withRouter, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { NavigationBar } from './components/NavigationBar'

import { AlertNotifcation } from './components/AlertNotification'

import { Home } from './routes/Home'
import { Signup } from './routes/Signup'
import { Login } from './routes/Login'

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
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/odds" component={Odds} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default withRouter(App);
