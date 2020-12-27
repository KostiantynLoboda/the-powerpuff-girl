import React from 'react'
import styles from './Page-404.module.scss'

const Page404 = ({ onClick }) => {
  return (
      <section className={styles.error} onClick={onClick} data-id="page404">
        Oops, This page does not exist
      </section>
  )
}

export default Page404
