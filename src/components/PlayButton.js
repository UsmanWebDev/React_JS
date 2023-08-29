import React from "react";
import "./PlayButton.css";
import { useState } from "react";

const PlayButton = ({ message, children, onPlay, onPause }) => {
  const [Playing, setPlaying] = useState(false);
  function handclick(e) {

    e.stopPropagation();

    if (Playing) {
      onPause();
    } else {
      onPlay();
    } 

    setPlaying(!Playing);
  }


  return (
    <div>
      <button onClick={handclick}>
        {children} {Playing ? "▶️" : "⏸️"}
      </button>
    </div>
  );
};

export default PlayButton;
