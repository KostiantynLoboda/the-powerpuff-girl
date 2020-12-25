import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEpisode } from '../../../actions'
import Loader from '../../Loader'

import cn from 'classnames'
import styles from './Episode.module.scss'

const staticImage =
  'https://static.tvmaze.com/images/no-img/no-img-landscape-text.png'
const Episode = props => {
  useEffect(() => {
    props.fetchEpisode(props.match.params.id)
  }, [])

  return (
    <main className={styles.container}>
      {props.episode ? (
        <div className={cn(styles.content, styles.col)}>
          <div className={styles.imageContainer}>
            <img
              className={styles.image}
              src={props.episode?.image?.original || staticImage}
              alt="image"
            />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.title}>{props.episode?.name}</div>
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
    </main>
  )
}
const mapStateToProps = state => {
  return {
    episode: state.episode,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { fetchEpisode })(Episode)
