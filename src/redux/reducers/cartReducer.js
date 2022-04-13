import axios from 'axios';
import produce from 'immer';
import { range, shuffle } from 'lodash';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_RESULT = 'SET_RESULT';
const FETCH_HEART = 'FETCH_HEART';
const SET_RANDOM = 'SET_RANDOM';

let intialize = {
  product: [],
  concurrence: '',
  activeRedH: false,
  forColor: [1, 2, 3, 4, 5, 6, 7, 8],
  random: [],
};

let f = shuffle(range(5)).slice(0, 8);
const cartReducer = (state = intialize, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, product: action.data };

    case FETCH_HEART:
      return produce(state, (draft) => {
        draft.product.map((el) => {
          if (el.id === action.id) {
            el.heart = !el.heart;
          }
        });
        let b = draft.product.some((el) => el.heart === true);
        if (b === true) {
          draft.activeRedH = true;
        } else {
          draft.activeRedH = false;
        }
      });

    case SET_RANDOM:
      return {
        ...state,
        random: shuffle(range(5)).slice(0, 8),
      };
    default:
      return state;
  }
};

export const setPro = (data) => ({ type: SET_PRODUCT, data });
export const setRandom = () => ({ type: SET_RANDOM });

export const setResult = (text) => ({ type: SET_RESULT, text });
export const fetchHearts = (id) => ({ type: FETCH_HEART, id });

export const setCart = () => (dispatch) => {
  axios
    .get('https://6254f77f89f28cf72b633678.mockapi.io/product')
    .then((el) => dispatch(setPro(el.data)));
};
export default cartReducer;
