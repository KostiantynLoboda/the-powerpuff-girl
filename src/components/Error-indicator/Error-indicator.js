import React from 'react'
import styles from './Error-indicator.module.scss'

const ErrorIndicator = () => {
  return (
    <div className={styles.errorIndicator}>
      Something wrong happens with this content. We will fix it as soon as
      possible!
    </div>
  )
}

export default ErrorIndicator
