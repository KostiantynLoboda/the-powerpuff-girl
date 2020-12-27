import React, { useEffect, useMemo } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEpisode } from '../../services'

import Button from '../Button'

import styles from './Episode.module.scss'
import Spinner from '../Spinner'
import ErrorIndicator from '../Error-indicator'

const staticImage =
  'https://static.tvmaze.com/images/no-img/no-img-landscape-text.png'

const EpisodeContainer = props => {

  return (
    <main className={styles.container}>
      {props.episode ? (
        <section className={styles.content}>
          <div className={styles.col}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={props.episode?.image?.original || staticImage}
                alt="image"
              />
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.title}>{props.episode?.name}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: props.episode?.summary,
                }}
              />
            </div>
          </div>
        </section>
      ) : null}
      <section className={styles.content}>
        <Link className={styles.link} to="/">
          <Button>Go To Main Page</Button>
        </Link>
      </section>
    </main>
  )
}

const Episode = ({ loading, error, movie, match, fetchEpisode, episode }) => {

  useEffect(() => {
    fetchEpisode(match.params.id)
  }, [])

  if (loading) {
    return <Spinner/>
  }
  if (error) {
    return <ErrorIndicator/>
  }
  return (
    <EpisodeContainer match={match}
                      movie={movie}
                      fetchEpisode={fetchEpisode}
                      episode={episode}/>
  )
}

const mapStateToProps = state => {
  return {
    episode: state.episode,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchEpisode } )(Episode)
