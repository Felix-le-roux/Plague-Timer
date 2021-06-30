import React from 'react';

const VideoContainer = () => {
  return (
    <div className='video-container'>
      <video
        src='../images/video/vid-1.mp4'
        autoPlay
        loop
        muted
        className='vid'
      ></video>
    </div>
  );
};

export default VideoContainer;
