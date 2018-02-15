import React from 'react';

import styles from './song.module.css'
import image from '../../pages/images/1.jpg'

const Song = (props) => {
  return (
    <div className={styles.center}>
      <img src={image} className={styles.image}/>
      <h4>{props.artist}</h4>
      <h2 className={styles.song}>{props.song}</h2>
    </div>
  )
}

export default Song
