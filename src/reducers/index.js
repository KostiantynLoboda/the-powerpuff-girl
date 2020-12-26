const initialState = {
  episodes: [],
  movie: {},
  episode: {},
  loading: true,
  error: null
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_MAININFO_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_MAININFO_SUCCESS':
      return {
        ...state,
        movie: action.movie,
        loading: false,
        error: null
      }
    case 'FETCH_MAININFO_FAILURE':
      return {
        ...state,
        movie: {},
        loading: false,
        error: action.payload
      }
    case 'FETCH_EPISODES_SUCCESS':
      return {
        ...state,
        episodes: action.episodes,
        loading: false
      }
    case 'FETCH_EPISODE_SUCCESS':
      return {
        ...state,
        episode: action.episode,
        loading: false
      }
    default:
      return state
  }
}

export default reducer
