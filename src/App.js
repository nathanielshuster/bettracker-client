import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

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

const App = () => {
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
  )
}

export default withRouter(App);
