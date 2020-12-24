import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSHow } from '../../../actions'
import MovieList from '../../EpisodesList'
import Loader from '../../Loader'

import styles from './Show.styles.scss'

const Show = props => {
  useEffect(() => {
    props.fetchSHow()
  }, [])

  return (
    <div className="">
      {Object.keys(props?.movie).length !== 0 ? (
        <div className="">
          <div className="">
            <img className="" src={props.movie.image.medium} alt="image" />
          </div>
          <div className="">
            <div className="">{props.movie.name}</div>
            <div className="">
              <div className="">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.movie.summary,
                  }}
                />
                <MovieList />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    movie: state.movie,
  }
}
export default connect(mapStateToProps, { fetchSHow })(Show)
