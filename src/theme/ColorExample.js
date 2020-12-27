import React from 'react'
import shortid from 'shortid'
import styles from './Color.module.scss'

const colors = [
  '--black100',
  '--black50',
  '--grey100',
  '--grey50',
  '--white100',
  '--white50',
  '--green100',
  '--green50',
  '--blue100',
  '--blue50',
]

const ColorExample = () => {
  return colors.map(color => (
    <div
      className={styles.exampleStyles}
      style={{ backgroundColor: `var(${color})`}}
      key={shortid.generate()}
    >
      {`var(${color})`}
    </div>
  ))
}

export default ColorExample
