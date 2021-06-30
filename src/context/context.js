import React, { useContext, useReducer, useRef, useEffect } from 'react';
import reducer from '../reducer/reducer';

const AppContext = React.createContext();

const initialState = {
  num: -430,
  pause: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let intervalRef = useRef();

  const increaseNum = () => dispatch({ type: 'INC_NUM' });

  const setNum = (num) => dispatch({ type: 'SET_NUM', payload: num });

  const setPause = (pause) => dispatch({ type: 'SET_PAUSE', payload: pause });

  useEffect(() => {
    setTimeout(() => {
      setPause(false);
      intervalRef.current = setInterval(increaseNum, 50);
    }, 11000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        intervalRef,
        increaseNum,
        setNum,
        setPause,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
