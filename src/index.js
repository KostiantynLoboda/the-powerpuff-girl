import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/initStore'

import App from './components/App'
import Header from './components/Header'
import ErrorBoundary from './components/error-boundary'

import './scss/default.scss'

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
    <Header />
    <Router>
      <App />
    </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
)
