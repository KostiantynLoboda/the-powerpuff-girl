import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const Button = ({children}) => {
  return (
    <button className={styles.button} data-id="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired
}

export default Button
