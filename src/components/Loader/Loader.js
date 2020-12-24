import React from 'react'
import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
    </div>
  )
}

Loader.propTypes = {}

export default Loader