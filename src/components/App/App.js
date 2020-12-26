import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from '../pages/MainPage/MainPage'
import EpisodePage from '../pages/EpisodePage/EpisodePage'

const App = () => {
  return (
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/episodes/:id" component={EpisodePage} />
      </Switch>
  )
}

export default App
