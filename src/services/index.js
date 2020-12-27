import {
  fetchMainInfoRequested, fetchMainInfoLoaded, fetchMainInfoError,
  fetchEpisodesRequested, fetchEpisodesLoaded, fetchEpisodesError,
  fetchEpisodeRequested, fetchEpisodeLoaded, fetchEpisodeError
} from '../actions'

const urlApi = 'https://api.tvmaze.com'
const showId = 6771

const fetchMainInfo = () => async dispatch => {
  dispatch(fetchMainInfoRequested())
  try {
    const response = await fetch(`${urlApi}/shows/${showId}`)
    const data = await response.json()
    dispatch(fetchMainInfoLoaded(data))
  } catch(error) {
    dispatch(fetchMainInfoError(error))
  }
}

const fetchEpisodes = () => async dispatch => {
  dispatch(fetchEpisodesRequested())
  try{
    const response = await fetch(`${urlApi}/shows/${showId}/episodes`)
    const data = await response.json()
    dispatch(fetchEpisodesLoaded(data))
  } catch(error) {
    dispatch(fetchEpisodesError(error))
  }
}

const fetchEpisode = (id) => async dispatch => {
  dispatch(fetchEpisodeRequested())
  try {
    const response = await fetch(`${urlApi}/episodes/${id}`)
    const data = await response.json()
    dispatch(fetchEpisodeLoaded(data))
  } catch(error) {
    dispatch(fetchEpisodeError(error))
  }
}

export {
  fetchMainInfo,
  fetchEpisodes,
  fetchEpisode
}