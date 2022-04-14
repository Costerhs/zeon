import axios from 'axios';
import produce from 'immer';
import { range, shuffle } from 'lodash';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_RESULT = 'SET_RESULT';
const PLUS_PRODUCT = 'PLUS_PRODUCT';
const FETCH_HEART = 'FETCH_HEART';
const SET_RANDOM = 'SET_RANDOM';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const TOGGLE_CART = 'TOGGLE_CART';

let intialize = {
  totalPrice: null,
  product: [],
  concurrence: '',
  activeRedH: false,
  forColor: [1, 2, 3, 4, 5, 6, 7, 8],
  basket: {},
  random: [],
  result: [],
  colores: ['#73A39D', '#84CC4C', '#B5A8A1', '#AB844A', '#6977F0', '#e9e8e8', '#141414', '#FF0000'],
};

let f = shuffle(range(5)).slice(0, 8);
const cartReducer = (state = intialize, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, product: action.data };

    case FETCH_HEART:
      return produce(state, (draft) => {
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

    case TOGGLE_CART:
      return produce(
        (state,
        (draft) => {
          draft.product.map((el) => {
            if (el.id === action.id) {
              el.cart = !el.cart;
            }
          });
        }),
      );

    case ADD_PRODUCT:
      // let newProduct = !state.basket[action.obj.id]
      //   ? [action.obj.id]
      //   : [...state[action.obj.id], action.obj];
      return produce(state, (draft) => {
        draft.basket[action.obj.id] = { elem: action.obj, totalCount: 1, prices: action.obj.price };
      });

    case PLUS_PRODUCT:
      return produce(state, (draft) => {
        draft.basket[action.id].totalCount += 1;
      });

    case REMOVE_PRODUCT:
      return produce(state, (draft) => {
        delete draft.basket[action.id];
      });

    case SET_RESULT:
      return {
        ...state,
        result: action.prod,
      };
    default:
      return state;
  }
};

export const setPro = (data) => ({ type: SET_PRODUCT, data });
export const setRandom = () => ({ type: SET_RANDOM });
export const addProduct = (obj) => ({ type: ADD_PRODUCT, obj });
export const setResult = (prod) => ({ type: SET_RESULT, prod });
export const fetchHeart = () => ({ type: FETCH_HEART });
export const plusProduct = (id) => ({ type: PLUS_PRODUCT, id });
export const removeProduct = (id) => ({ type: REMOVE_PRODUCT, id });

export const fetchHearts = (id, r) => async (dispatch) => {
  await axios.put('https://6254f77f89f28cf72b633678.mockapi.io/product/' + id, { heart: r });
  dispatch(setCart());
};
export const setCart = () => async (dispatch) => {
  await axios
    .get('https://6254f77f89f28cf72b633678.mockapi.io/product')
    .then((el) => dispatch(setPro(el.data)));
  dispatch(fetchHeart());
};
export const setResultProd = (text) => (dispatch) => {
  axios
    .get('https://6254f77f89f28cf72b633678.mockapi.io/product?search=' + text)
    .then((el) => dispatch(setResult(el.data)));
};
export default cartReducer;
