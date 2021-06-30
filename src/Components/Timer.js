import React, { useRef, useEffect, useState } from 'react';
import { useGlobalContext } from '../context/context';
// import useWindowDimensions from '../CustomHooks/useWindowDimensions';
import VideoContainer from './ShowcaseComponents/VideoContainer';
import Frame from './ShowcaseComponents/Frame';
import FrameBG from './ShowcaseComponents/FrameBG';
import './Timer.css';

import data from '../data/data';

import FlipNumbers from 'react-flip-numbers';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwipeCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

SwipeCore.use([Navigation]);

const Timer = () => {
  const { num, pause, intervalRef, setNum, setPause, increaseNum } =
    useGlobalContext();

  const sliderRef = useRef();
  const rangeSliderRef = useRef();
  const [myIndex, setMyIndex] = useState(0);
  const [stopIndex, setStopIndex] = useState(false);

  useEffect(() => {
    rangeSliderRef.current.style.setProperty(
      '--thumb-rotate',
      `${(num / 100) * 720}deg`
    );
  }, [num]);

  useEffect(() => {
    if (num >= -430 && num < 165 && myIndex !== 0) {
      setMyIndex(0);
    }
    if (num >= 165 && num < 541 && myIndex !== 1) {
      setMyIndex(1);
    }
    if (num >= 541 && num < 1347 && myIndex !== 2) {
      setMyIndex(2);
    }
    if (num >= 1347 && num < 1629 && myIndex !== 3) {
      setMyIndex(3);
    }
    if (num >= 1629 && num < 1665 && myIndex !== 4) {
      setMyIndex(4);
    }
    if (num >= 1665 && num < 1720 && myIndex !== 5) {
      setMyIndex(5);
    }
    if (num >= 1720 && num < 1855 && myIndex !== 6) {
      setMyIndex(6);
    }
    if (num >= 1855 && myIndex !== 7) {
      setMyIndex(7);
    }
  }, [num, myIndex]);

  useEffect(() => {
    sliderRef.current.swiper.slideTo(myIndex);
  }, [myIndex]);

  const getIndex = (index) => {
    switch (index) {
      case 0:
        setNum(-430);
        break;
      case 1:
        setNum(165);
        break;
      case 2:
        setNum(541);
        break;
      case 3:
        setNum(1347);
        break;
      case 4:
        setNum(1629);
        break;
      case 5:
        setNum(1665);
        break;
      case 6:
        setNum(1720);
        break;
      case 7:
        setNum(1855);
        break;
      default:
        break;
    }
  };

  const handleClick = () => {
    if (!pause) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(increaseNum, 50);
    }
    setPause(!pause);
  };

  return (
    <section id='show-case'>
      <VideoContainer />
      <div className='timer-header'>
        <div className='counter'>
          <FlipNumbers
            height={30}
            width={30}
            color='black'
            background='white'
            play
            numbers={num < 0 ? `${0 - num}` : `${0 + num}`}
          />
          <h1
            style={{
              backgroundColor: '#fff',
              fontSize: '26px',
              marginLeft: '10px',
            }}
          >
            {num < 0 ? `BC` : `AD`}
          </h1>
        </div>

        {num < 2021 ? (
          <button onClick={handleClick} className='counter-btn'>
            {pause ? 'Run' : 'Pause'}
          </button>
        ) : (
          <button onClick={() => setNum(-430)} className='counter-btn'>
            Restart
          </button>
        )}
      </div>

      <div className='slider-container'>
        <Frame />
        <FrameBG />
        <Swiper
          ref={sliderRef}
          spaceBetween={1}
          slidesPerView={1}
          onSlideChange={(e) => !stopIndex && getIndex(e.realIndex)}
          navigation
          style={{
            height: '100%',
            width: '100%',
            zIndex: '200',
          }}
        >
          {data.map((item) => {
            const { id, img } = item;
            return (
              <SwiperSlide key={id}>
                <img src={img} alt={id} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className='rsl-container'>
        <div className='rsl-background'></div>
        <input
          ref={rangeSliderRef}
          type='range'
          min='-430'
          max='2021'
          value={num}
          onChange={(e) => setNum(parseInt(e.target.value))}
          onMouseDown={() => setStopIndex(true)}
          onTouchStart={() => setStopIndex(true)}
          onTouchEnd={() => setStopIndex(false)}
          onMouseUp={() => setStopIndex(false)}
          className='range-slider'
        ></input>
      </div>
    </section>
  );
};

export default Timer;
