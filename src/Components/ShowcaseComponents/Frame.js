import React from 'react';

const Frame = () => {
  return (
    <div
      className='frame'
      style={{
        background: `url(${
          process.env.PUBLIC_URL + '/images/black-frame.png'
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
    ></div>
  );
};

export default Frame;
