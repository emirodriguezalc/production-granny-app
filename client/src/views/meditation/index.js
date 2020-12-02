import React from 'react';
import Header from '../../components/header';
import playIcon from '../../icons/play.svg';
import pauseIcon from '../../icons/pause.svg';
import stopIcon from '../../icons/stop.svg';
import awarenessGuide from '../../media/awareness.mp3';
import guide1 from '../../media/guide1.mp3';
import guide2 from '../../media/guide2.mp3';
import guide3 from '../../media/guide3.mp3';
import './styles.css';

const Meditation = ({ view }) => {
  const guideCollection = { guide1, guide2, guide3, awarenessGuide };
  const handlePlay = e => {
    const audioElement = e.target.parentNode.querySelector('audio');
    audioElement.play();
  };
  const handlePause = e => {
    const audioElement = e.target.parentNode.querySelector('audio');
    audioElement.pause();
  };
  const handleStop = e => {
    const audioElement = e.target.parentNode.querySelector('audio');
    audioElement.pause();
    audioElement.currentTime = 0;
  };
  return (
    <div className="meditation-menu">
      <Header title="Meditation guides" backTo="/mindmenu" />
      <div className="content-wrapper">
        {view.list.map(l => {
          return (
            <article className="article">
              <h1 className="article--text">{l.duration}</h1>
              <audio className="audio">
                <source src={guideCollection[l.name]} type="audio/mpeg" />
              </audio>
              <img
                onClick={handlePlay}
                className="icon--action play1"
                src={playIcon}
                alt="play"
              />
              <img
                onClick={handlePause}
                className="icon--action pause1"
                src={pauseIcon}
                alt="pause"
              />
              <img
                onClick={handleStop}
                className="icon--action stop1"
                src={stopIcon}
                alt="stop"
              />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Meditation;
