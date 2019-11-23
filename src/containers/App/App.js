import React, { memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Routes from '../../routes'

const App = memo(() => (
  <Router>
    <>
      <Switch>
        <Route component={Routes} />
      </Switch>
    </>
  </Router>
))

export default App
