import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEpisode } from '../../services'
import PropTypes from 'prop-types'

import Button from '../Button'
import Spinner from '../Spinner'
import ErrorIndicator from '../Error-indicator'

import styles from './Episode.module.scss'

const staticImage =
  'https://static.tvmaze.com/images/no-img/no-img-landscape-text.png'

const EpisodeContainer = ({episode}) => {

  return (
    <main className={styles.container}>
      {episode ? (
        <section className={styles.content}>
          <div className={styles.col}>
            <div className={styles.imageContainer}>
              <img
                className={styles.image}
                src={episode.image?.original || staticImage}
                alt="Episode"
              />
            </div>
            <div className={styles.infoContainer}>
              <div className={styles.title}>{episode?.name}</div>
              <div
                dangerouslySetInnerHTML={{
                  __html: episode.summary,
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

EpisodeContainer.propTypes = {
  episode: PropTypes.object.isRequired
}

Episode.propTypes = {
  episode: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  fetchEpisode: PropTypes.func.isRequired,
  movie: PropTypes.object,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    episode: state.episode,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchEpisode } )(Episode)
