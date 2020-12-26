import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import { fetchEpisodes } from '../../actions'

import cn from 'classnames'
import styles from './EpisodesList.module.scss'

const EpisodesList = props => {
  useEffect(() => {
    props.fetchEpisodes()
  }, [])
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.headerList}>
          <div className={cn(styles.col, styles.number)}>Season/ Number</div>
          <div className={cn(styles.col, styles.date)}>Date</div>
          <div className={cn(styles.col, styles.name)}>Name</div>
        </div>
          {props?.episodes
            ? props.episodes.map(episode => {
              return (
                <div
                  className={cn(styles.col, styles.linkContainer)}
                  key={shortid.generate()}
                >
                  <div className={cn(styles.col, styles.number)}>
                    {episode.season}/{episode.number}
                  </div>
                  <div className={cn(styles.col, styles.date)}>{episode.airdate}</div>
                  <Link to={`/episodes/${episode.id}`}
                        className={cn(styles.col, styles.name, styles.link)}>{episode.name}
                  </Link>
                </div>
              )
            })
            : null}
      </section>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
  }
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodesList)
