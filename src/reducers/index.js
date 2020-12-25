const initialState = {
  episodes: [],
  movie: {},
  episode: {},
  loading: true,
  error: null,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_MAININFO_REQUEST':
      return { ...state }
    case 'FETCH_MAININFO_SUCCESS':
      return { ...state, movie: action.movie }
    case 'FETCH_MAININFO_FAILURE':
      return { ...state }
    case 'FETCH_EPISODES_SUCCESS':
      return { ...state, episodes: action.episodes }
    case 'FETCH_EPISODE_SUCCESS':
      return { ...state, episode: action.episode }
    default:
      return state
  }
}

export default reducer
