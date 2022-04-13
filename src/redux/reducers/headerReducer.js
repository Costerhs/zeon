import produce from 'immer';

const SET_RESULT = 'SET_RESULT';

let intialize = {
  concurrence: '',
};
const headerReducer = (state = intialize, action) => {
  switch (action.type) {
    case SET_RESULT:
      return { ...state, concurrence: action.text };

    default:
      return state;
  }
};

export const setResult = (text) => ({ type: SET_RESULT, text });

export default headerReducer;
