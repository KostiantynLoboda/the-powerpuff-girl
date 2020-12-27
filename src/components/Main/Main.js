import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import ErrorIndicator from '../Error-indicator'
import Spinner from '../Spinner'

import cn from 'classnames'
import styles from './Main.module.scss'

const MainContainer = ({ movie }) => {
  return (
    <>
      <main className={styles.container}>
        {Object.keys(movie).length ? (
          <>
            <section className={styles.content}>
              <div className={cn(styles.col, styles.imageContainer)}>
                <img className={styles.image}
                     src={movie.image?.original} alt="Main"/>
              </div>
              <div className={cn(styles.col, styles.infoContainer)}>
                <div className={styles.info} dangerouslySetInnerHTML={{
                  __html: movie.summary,
                }}
                />
              </div>
            </section>
          </>
        ) : null}
      </main>
    </>
  )
}

const Main = ({ loading, error, movie }) => {
  if (loading) {
    return <Spinner/>
  }
  if (error) {
    return <ErrorIndicator/>
  }
  return <MainContainer movie={movie}/>
}

Main.propTypes = {
  movie: PropTypes.object.isRequired,
  error: PropTypes.bool,
  loading: PropTypes.bool.isRequired
}

MainContainer.propTypes = {
  movie: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps)(Main)
