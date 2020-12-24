// import Loader from '../components/Loader'
import React from 'react'

const urlApi = 'https://api.tvmaze.com'

const fetchSHow = () => async dispatch => {
  const response = await fetch(`${urlApi}/shows/6771`)
  const data = await response.json()
  dispatch({ type: 'FETCH_SHOW_SUCCESS', movie: data })
}
const fetchEpisodes = () => async dispatch => {
  const response = await fetch(`${urlApi}/shows/6771/episodes`)
  const data = await response.json()
  dispatch({
    type: 'FETCH_EPISODES_SUCCESS',
    episodes: data,
  })
}
const fetchEpisode = id => async dispatch => {
  const response = await fetch(`${urlApi}/episodes/${id}`)
  const data = await response.json()
  dispatch({ type: 'FETCH_EPISODE_SUCCESS', episode: data })
}

export { fetchSHow, fetchEpisode, fetchEpisodes }
