import React from 'react';

const FrameBG = () => {
  return (
    <div
      className='frame-bg'
      style={{
        background: `url(${
          process.env.PUBLIC_URL + '/images/paint-texture.jpg'
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    ></div>
  );
};

export default FrameBG;
