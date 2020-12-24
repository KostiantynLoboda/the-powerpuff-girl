const initialState = {
  episodes: [],
  movie: {},
  episode: {},
  loading: true,
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_EPISODES_SUCCESS':
      return { ...state, episodes: action.episodes }
    case 'FETCH_SHOW_SUCCESS':
      return { ...state, movie: action.movie }
    case 'FETCH_EPISODE_SUCCESS':
      return { ...state, episode: action.episode }
    default:
      return state
  }
}

export default reducer
