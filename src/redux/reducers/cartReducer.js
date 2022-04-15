import produce from 'immer';
import { range, shuffle } from 'lodash';
import { cartReaction, productApi } from '../../assets/img/api/api';

const SET_PRODUCT = 'SET_PRODUCT';
const SET_RESULT = 'SET_RESULT';
const PLUS_PRODUCT = 'PLUS_PRODUCT';
const FETCH_HEART = 'FETCH_HEART';
const SET_RANDOM = 'SET_RANDOM';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const TOGGLE_CART = 'TOGGLE_CART';
const SET_BASKET = 'SET_BASKET';
const SET_ACTUAL_CART = 'SET_ACTUAL_CART';

let intialize = {
  totalPrice: null,
  product: [],
  concurrence: '',
  activeRedH: false,
  forColor: [1, 2, 3, 4, 5, 6, 7, 8],
  basket: [],
  random: [],
  result: [],
  actualCart: 2,
  colores: ['#73A39D', '#84CC4C', '#B5A8A1', '#AB844A', '#6977F0', '#e9e8e8', '#141414', '#FF0000'],
};

let f = shuffle(range(5)).slice(0, 8);
const cartReducer = (state = intialize, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return { ...state, product: action.data };
    case SET_BASKET:
      return { ...state, basket: action.data };
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
    case SET_ACTUAL_CART:
      return { ...state, actualCart: action.num };

    case SET_RESULT:
      return {
        ...state,
        result: action.prod,
      };
    default:
      return state;
  }
};
export const setActualCart = (num) => ({ type: SET_ACTUAL_CART, num });
export const setPro = (data) => ({ type: SET_PRODUCT, data });
export const setRandom = () => ({ type: SET_RANDOM });
export const addProducts = (obj) => ({ type: ADD_PRODUCT, obj });
export const setResult = (prod) => ({ type: SET_RESULT, prod });
export const fetchHeart = () => ({ type: FETCH_HEART });
export const removeProducts = (id) => ({ type: REMOVE_PRODUCT, id });
export const setBasket = (data) => ({ type: SET_BASKET, data });

export const fetchHearts = (id, r) => async (dispatch) => {
  await cartReaction.putHeart(id, r);
  dispatch(setCart());
};

export const setBasketData = () => async (dispatch) => {
  let data = await cartReaction.getBasket();
  dispatch(setBasket(data));
};

export const setCart = () => async (dispatch) => {
  let data = await cartReaction.getProduct();
  dispatch(setPro(data));
  dispatch(setBasketData());
  dispatch(fetchHeart());
};
export const setResultProd = (text) => (dispatch) => {
  // axios
  //   .get('https://6254f77f89f28cf72b633678.mockapi.io/product?search=' + text)
  //   .then((el) => dispatch(setResult(el.data)));
};
export const addProduct = (id) => async (dispatch) => {
  cartReaction.putCartsFetch(id);

  let elem = await cartReaction.getCartId(id);
  await cartReaction.setShoppingData(elem);
};
export const plusProduct = (id, totalCount) => async (dispatch) => {
  await cartReaction.plusCart(id, totalCount);
  dispatch(setBasketData());
};
export const minussProduct = (id, totalCount, remID) => async (dispatch) => {
  if (totalCount === 1) {
    dispatch(removeProduct(id, remID));
  } else {
    await cartReaction.minusCart(id, totalCount);
    dispatch(setBasketData());
  }
};

export const removeProduct = (id, remID) => async (dispatch) => {
  cartReaction.falseCart(remID);
  await cartReaction.deleteShop(id);
  dispatch(setBasketData());
};

export const changeColor = (id, newColor) => async (dispatch) => {
  await cartReaction.toggleColor(id, newColor);
  dispatch(setCart());
};

export const toggleActual = (trueId) => async (dispatch) => {
  await productApi.setActualID(trueId);
  let data = await productApi.getActualData();
  dispatch(setActualCart(data));
};

export default cartReducer;
