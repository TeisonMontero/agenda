import React, { useEffect, memo } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt from 'jwt-decode'

import Routes from '../../routes'

import Alert from '../../components/Alert'

// Actions
import { setUser } from '../../store/actions/auth'

// Redux
import store from '../../store'

const App = memo(() => {
  useEffect(() => {
    const token = localStorage.token
    // Check for token and set
    if (token) {
      // Decode token and get user info and exp
      const user = jwt(token)
      // Set user
      store.dispatch(setUser(user))
    }
  }, [])

  return (
    <Provider store={store}>
      <Alert />
      <Router>
        <>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </>
      </Router>
    </Provider>
  )
})

export default App