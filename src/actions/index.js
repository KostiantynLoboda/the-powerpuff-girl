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

const fetchEpisodesRequested = () => {
  return {
    type: 'FETCH_EPISODES_REQUEST',
  }
}
const fetchEpisodesLoaded = data => {
  return {
    type: 'FETCH_EPISODES_SUCCESS',
    episodes: data,
  }
}
const fetchEpisodesError = error => {
  return {
    type: 'FETCH_EPISODES_FAILURE',
    payload: error,
  }
}

const fetchEpisodeRequested = () => {
  return {
    type: 'FETCH_EPISODE_REQUEST',
  }
}
const fetchEpisodeLoaded = data => {
  return {
    type: 'FETCH_EPISODE_SUCCESS',
    episode: data,
  }
}
const fetchEpisodeError = error => {
  return {
    type: 'FETCH_EPISODE_FAILURE',
    payload: error,
  }
}

export {
  fetchMainInfoRequested, fetchMainInfoLoaded, fetchMainInfoError,
  fetchEpisodesRequested, fetchEpisodesLoaded, fetchEpisodesError,
  fetchEpisodeRequested, fetchEpisodeLoaded, fetchEpisodeError
}
