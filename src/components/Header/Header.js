import React from 'react'
import {connect} from 'react-redux'

import styles from './Header.module.scss'

const Header = props => {
  return (
      <header className={styles.header}>
        {Object.keys(props?.movie).length ? (
                  <div className={styles.title}>{props.movie.name}</div>
        ) : null}
      </header>
  )
}
const mapStateToProps = state => {
  return {
    movie: state.movie,
  }
}
export default connect(mapStateToProps)(Header)