import React from 'react'

const urlApi = 'https://api.tvmaze.com'
const showId = 6771

const fetchMainInfoRequested = () => {
  return {
    type: 'FETCH_MAININFO_REQUEST',
  }
}

const fetchMainInfoLoaded = data => {
  return {
    type: 'FETCH_MAININFO_SUCCESS',
    movie: data,
  }
}

const fetchMainInfoError = error => {
  return {
    type: 'FETCH_MAININFO_FAILURE',
    payload: error,
  }
}

const fetchMainInfo = async () => {
  try {
  const response = await fetch(`${urlApi}/shows/${showId}`)
  return await response.json()
  } catch (error) {
  }
}

const fetchEpisodes = () => async dispatch => {
  try {
    const response = await fetch(`${urlApi}/shows/${showId}/episodes`)
    const data = await response.json()
    dispatch({
      type: 'FETCH_EPISODES_SUCCESS',
      episodes: data,
    })
  } catch (error) {
  }

}

const fetchEpisode = id => async dispatch => {
  try {
  const response = await fetch(`${urlApi}/episodes/${id}`)
  const data = await response.json()
  dispatch({ type: 'FETCH_EPISODE_SUCCESS',
    episode: data,
  })
  } catch (error) {
  }
}

export { fetchMainInfoRequested, fetchMainInfoLoaded, fetchMainInfoError, fetchMainInfo, fetchEpisode, fetchEpisodes }
