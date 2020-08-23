import React from 'react';

const YoutubePlayer = ({ src }) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: 0,
      paddingBottom: '56.25%',
    }}
  >
    <iframe
      title="Youtube Player"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
      width="560"
      height="315"
      src={src}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default YoutubePlayer;
