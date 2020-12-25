import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import { fetchEpisodes } from '../../actions'
import Loader from '../Loader'

import styles from './EpisodesList.module.scss'

const EpisodesList = props => {
  useEffect(() => {
    props.fetchEpisodes()
  }, [])
  return (
      <section className={styles.content}>
        <div className={styles.col}>Season/Number</div>
        <div className={styles.col}>Date</div>
        <div className={styles.col}>Name</div>
        {props?.episodes
            ? props.episodes.map(episode => {
              return (
                  <Link
                      to={`/episodes/${episode.id}`}
                      className={styles.col}
                      key={shortid.generate()}
                  >
                    <div className="">
                      {episode.season}/{episode.number}
                    </div>
                    <div className="">{episode.airdate}</div>
                    <div className="">{episode.name}</div>
                  </Link>
              )
            })
            : null}
      </section>
  )
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
  }
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodesList)
