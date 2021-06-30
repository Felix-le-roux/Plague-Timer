const reducer = (state, action) => {
  if (action.type === 'INC_NUM') {
    if (state.num < 2021) {
      return { ...state, num: state.num + 1 };
    }
  }

  if (action.type === 'SET_NUM') {
    return { ...state, num: action.payload };
  }

  if (action.type === 'SET_PAUSE') {
    return { ...state, pause: action.payload };
  }

  return state;
};

export default reducer;
