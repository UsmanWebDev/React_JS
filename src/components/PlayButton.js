import React from "react";
import "./PlayButton.css";

const PlayButton = ({ message, children, onPlay, onPause }) => {
  let Playing = false; // 
  function handclick(e) {
    e.stopPropagation()
    if (Playing) onPause();
    else onPlay();

    Playing = !Playing;
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
