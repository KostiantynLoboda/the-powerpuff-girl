import React from 'react'
import '../scss/default.scss'
import styles from './App.module.scss'
import { Switch, Route } from 'react-router-dom'

import Movie from '../pages/Show'
import MovieDetails from '../pages/Episode'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Movie} exact />
        <Route path="/episodes/:id" component={MovieDetails} />
      </Switch>
    </>
  )
}

export default App
