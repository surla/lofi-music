import React from "react";

import styles from "./song.module.css";
import image from "../pages/images/1.jpg";

const Song = props => {
  return (
    <div>
      <img src={image} />
      <h4>{props.artist}</h4>
      <h2>{props.song}</h2>
    </div>
  );
};

export default Song;
