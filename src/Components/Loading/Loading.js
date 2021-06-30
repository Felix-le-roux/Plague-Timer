import React, { useState, useEffect } from 'react';
import TextLoading from './TextLoading';
import './Loading.css';

const Loading = () => {
  const [isLoading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);
  const [hideLoading, setHideLoading] = useState(false);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 11000));
  }

  useEffect(() => {
    let timer1 = setTimeout(() => setHide(true), 8000);
    let timer2 = setTimeout(() => setHideLoading(true), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    fakeRequest().then(() => {
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className='loading-screen'>
        <section className={`rnOuter ${hide && 'hide'}`}>
          <section className='aoTable'>
            <div className='aoTableCell'>
              <h1>PLAGUE TIMER</h1>
              <p>Version 1.0</p>
            </div>
          </section>
          <div className='rnInner'>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
            <div className='rnUnit'></div>
          </div>
        </section>
        <div className={`animation-container ${hideLoading && 'hide-loading'}`}>
          <img
            src={`${process.env.PUBLIC_URL}/images/video/ghost.gif`}
            alt='Loading ...'
            className='loading-animation'
          />
          <span className='loading-text'>
            <TextLoading />
          </span>
        </div>
      </div>
    );
  }

  return null;
};

export default Loading;
