import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../pages/Main'
import Episode from '../pages/Episode'

const App = () => {
  return (
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/episodes/:id" component={Episode} />
      </Switch>
  )
}

export default App
