import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import shortid from 'shortid'
import { fetchEpisodes } from '../../actions'
import Loader from '../Loader'

import styles from './EpisodesList.module.scss'

const EpisodesList = props => {
  useEffect(() => {
    props.fetchEpisodes()
  }, [])
  return (
    <div className="">
      <div className="">
        <div className="">Season/Number</div>
        <div className="">Date</div>
        <div className="">Name</div>
        {props?.episodes
          ? props.episodes.map(episode => {
              return (
                <Link
                  to={`/episodes/${episode.id}`}
                  className=""
                  key={shortid.generate()}
                >
                  <div className="">
                    {episode.season}/{episode.number}
                  </div>
                  <div className="">{episode.airdate}</div>
                  <div className="">{episode.name}</div>
                </Link>
              )
            })
          : null}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    episodes: state.episodes,
  }
}

export default connect(mapStateToProps, { fetchEpisodes })(EpisodesList)
