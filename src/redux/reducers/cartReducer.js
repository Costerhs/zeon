import axios from 'axios';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_RESULT = 'SET_RESULT';

let intialize = {
  product: {},
  concurrence: '',
};
const cartReducer = (state = intialize, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, product: action.data };

    case SET_RESULT:
      return { ...state, concurrence: action.text };
    default:
      return state;
  }
};

export const setPro = (data) => ({ type: SET_PRODUCT, data });
export const setResult = (text) => ({ type: SET_RESULT, text });

export const setCart = () => (dispatch) => {
  axios
    .get('https://6254f77f89f28cf72b633678.mockapi.io/product')
    .then((el) => dispatch(setPro(el.data)));
};
export default cartReducer;
