import React from 'react';

import styles from './song.module.css'

const Song = (props) => {
  return (
    <div className={styles.center}>
      <h4>{props.artist}</h4>
      <h2>{props.song}</h2>
    </div>
  )
}

export default Song
