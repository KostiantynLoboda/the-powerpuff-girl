import React from 'react'
import { connect } from 'react-redux'
import EpisodesList from '../../EpisodesList'

import cn from 'classnames'
import styles from './Main.module.scss'

const Main = props => {

  return (
    <main className={styles.container}>
      {Object.keys(props?.movie).length ? (
        <>
          <section className={styles.content}>
            <div className={cn(styles.col, styles.imageContainer)}>
              <img className={styles.image} src={props.movie.image?.original} alt="image" />
            </div>
            <div className={cn(styles.col, styles.infoContainer)}>
                <div className={styles.info} dangerouslySetInnerHTML={{
                  __html: props.movie.summary,
                  }}
                />
            </div>
          </section>
          <EpisodesList />
         </>
      ) : null}
    </main>
  )
}
const mapStateToProps = state => {
  return {
    movie: state.movie,
  }
}
export default connect(mapStateToProps)(Main)
