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
        movie: {},
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

    case 'FETCH_EPISODES_REQUEST':
      return {
        ...state,
        episodes: [],
        loading: true,
        error: null
      }
    case 'FETCH_EPISODES_SUCCESS':
      return {
        ...state,
        episodes: action.episodes,
        loading: false,
        error: null
      }
    case 'FETCH_EPISODES_FAILURE':
      return {
        ...state,
        episodes: [],
        loading: false,
        error: action.payload
      }

    case 'FETCH_EPISODE_REQUEST':
      return {
        ...state,
        episode: {},
        loading: true,
        error: null
      }
    case 'FETCH_EPISODE_SUCCESS':
      return {
        ...state,
        episode: action.episode,
        loading: false,
        error: null
      }
    case 'FETCH_EPISODE_FAILURE':
      return {
        ...state,
        episode: {},
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer
