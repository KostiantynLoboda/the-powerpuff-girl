import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEpisode } from '../../actions'

import Button from '../Button'

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

const mapStateToProps = state => {
  return {
    episode: state.episode,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { fetchEpisode })(Episode)
