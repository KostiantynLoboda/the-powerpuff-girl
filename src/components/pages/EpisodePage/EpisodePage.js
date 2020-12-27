import React from 'react'
import PropTypes from 'prop-types'

import Episode from '../../Episode'

const EpisodePage = ({match}) => {
  return (
    <Episode match={match}/>
  )
}

EpisodePage.propTypes = {
  match: PropTypes.object.isRequired
}

export default EpisodePage
