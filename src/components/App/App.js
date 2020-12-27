import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from '../pages/MainPage/MainPage'
import EpisodePage from '../pages/EpisodePage/EpisodePage'
import Page404 from '../pages/Page-404'

const App = () => {
  return (
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/episodes/:id" component={EpisodePage} exact/>
        <Route component={Page404} />
      </Switch>
  )
}

export default App
