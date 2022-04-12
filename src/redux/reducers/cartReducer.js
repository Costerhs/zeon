import axios from 'axios';
import produce from 'immer';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_RESULT = 'SET_RESULT';
const FETCH_HEART = 'FETCH_HEART';

let intialize = {
  product: [],
  concurrence: '',
  activeRedH: false,
};
const cartReducer = (state = intialize, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, product: action.data };

    case SET_RESULT:
      return { ...state, concurrence: action.text };

    case FETCH_HEART:
      return produce(state, (draft) => {
        draft.product.map((el) => {
          if (el.id === action.id) {
            el.heart = !el.heart;
          }
        });
        if (draft.product.some((el) => el.heart === true) === true) {
          draft.activeRedH = true;
        } else {
          draft.activeRedH = false;
        }
      });
    default:
      return state;
  }
};

export const setPro = (data) => ({ type: SET_PRODUCT, data });
export const setResult = (text) => ({ type: SET_RESULT, text });
export const fetchHearts = (id) => ({ type: FETCH_HEART, id });

export const setCart = () => (dispatch) => {
  axios
    .get('https://6254f77f89f28cf72b633678.mockapi.io/product')
    .then((el) => dispatch(setPro(el.data)));
};
export default cartReducer;
