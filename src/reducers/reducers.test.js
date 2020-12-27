import reducer from '../reducers'

describe('reducer initial state', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        episodes: [],
        movie: {},
        episode: {},
        loading: true,
        error: null
      }
    ])
  })
  it('should handle FETCH_MAININFO_REQUEST', () => {
    expect(
      reducer(
        {
          isLoading: false,
        },
        {
          type: 'FETCH_MAININFO_REQUEST',
          payload: {
            movie: {},
            loading: true,
            error: null }
        }
      )
    ).toEqual({
      loading: true
    })
  })
})