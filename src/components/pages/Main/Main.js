import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchMainInfo } from '../../../actions'
import EpisodesList from '../../EpisodesList'
import Loader from '../../Loader'

import cn from 'classnames'
import styles from './Main.module.scss'

const Main = props => {
/*  useEffect(() => {
    props.fetchMainInfo()
  }, [])*/

  return (
    <main className={styles.container}>
      {Object.keys(props?.movie).length ? (
        <>
          <section className={styles.content}>
            <div className={cn(styles.col, styles.imageContainer)}>
              <img className={styles.image} src={props.movie.image?.original} alt="image" />
            </div>
            <div className={cn(styles.col, styles.infoContainer)}>
              <div className="">
                <div dangerouslySetInnerHTML={{
                  __html: props.movie.summary,
                  }}
                />
              </div>
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
export default connect(mapStateToProps/*, { fetchMainInfo }*/)(Main)
