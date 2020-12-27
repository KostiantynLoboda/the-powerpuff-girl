import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

const Header = ({movie}) => {
  return (
      <header className={styles.header}>
        {Object.keys(movie).length ? (
                  <div className={styles.title}>{movie.name}</div>
        ) : null}
      </header>
  )
}

Header.propTypes = {
  movie: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
  }
}
export default connect(mapStateToProps)(Header)