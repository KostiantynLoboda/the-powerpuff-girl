import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEpisode } from '../../../actions'
import Loader from '../../Loader'

import styles from './Episode.styles.scss'

const staticImage =
  'https://static.tvmaze.com/images/no-img/no-img-landscape-text.png'
const Episode = props => {
  useEffect(() => {
    props.fetchEpisode(props.match.params.id)
  }, [])

  return (
    <div className="">
      {props.episode ? (
        <div className="">
          <div className="">
            <img
              className={styles.image}
              src={props.episode?.image?.medium || staticImage}
              alt="image"
            />
          </div>
          <div className={styles.name}>
            <div className="">{props.episode?.name}</div>
            <div className="">Summary: </div>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: props.episode?.summary,
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}
const mapStateToProps = state => {
  return {
    episode: state.episode,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { fetchEpisode })(Episode)
