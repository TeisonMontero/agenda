import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Routes
import { Home } from '../pages/Home'

const Routes = () => (
  <>
    <Switch>
      <Route render={() => <Redirect to="/home" />} />
    </Switch>
  </>
)

export default Routes
