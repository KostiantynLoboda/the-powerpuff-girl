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
        loading: true
      }
    case 'FETCH_MAININFO_SUCCESS':
      return {
        ...state,
        movie: action.movie,
        loading: false
      }
    case 'FETCH_MAININFO_FAILURE':
      return {
        ...state,
        error: action.payload,
        loading: false
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
