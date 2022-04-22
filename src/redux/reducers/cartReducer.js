import axios from 'axios';
import { Action } from 'history';
import produce from 'immer';
import { range, shuffle } from 'lodash';
import { cartReaction, productApi, testApi } from '../../assets/img/api/api';
import { toggleId } from './productReducer';

const SET_IMAGE = 'SET_IMAGE';
const SET_PRODUCT = 'SET_PRODUCT';
const SET_RESULT = 'SET_RESULT';
const FETCH_HEART = 'FETCH_HEART';
const SET_RANDOM = 'SET_RANDOM';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';
const TOGGLE_CART = 'TOGGLE_CART';
const SET_BASKET = 'SET_BASKET';
const SET_ACTUAL_CART = 'SET_ACTUAL_CART';
const TOGGLE_FORM = 'TOGGLE_FORM';
const TOGGLE_BASKET = 'TOGGLE_BASKET';
const TOGGLE_IMG_BAS = 'TOGGLE_IMG_BAS';
const ADD_USER = 'ADD_USER';
const SET_PAGINATION_COUNT = 'SET_PAGINATION_COUNT';

let intialize = {
  formes: 0,
  totalPrice: null,
  product: [],
  concurrence: '',
  activeRedH: false,
  forColor: [1, 2, 3, 4, 5, 6, 7, 8],
  basket: [],
  random: [],
  result: [],
  paginationCount: null,
  actualCart: 2,
  images: [],
  basFetch: false,
  activeBasketImg: false,
  colores: ['#73A39D', '#84CC4C', '#B5A8A1', '#AB844A', '#6977F0', '#e9e8e8', '#141414', '#FF0000'],
};

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
    // case SET_ACTUAL_CART:
    //   return { ...state, actualCart: action.num };

    case SET_RESULT:
      return {
        ...state,
        result: action.prod,
        concurrence: action.text,
      };

    case SET_IMAGE:
      return { ...state, images: action.data };

    case TOGGLE_FORM:
      return { ...state, formes: action.stat };

    case TOGGLE_BASKET:
      return { ...state, basFetch: action.stat };

    case TOGGLE_IMG_BAS:
      return produce(state, (draft) => {
        let b = draft.basket.length > 0;
        if (b === true) {
          draft.activeBasketImg = true;
        } else {
          draft.activeBasketImg = false;
        }
      });

    case SET_PAGINATION_COUNT:
      return { ...state, paginationCount: action.num };
    default:
      return state;
  }
};

export const setPagi = (num) => ({ type: SET_PAGINATION_COUNT, num });
export const activeBasImg = () => ({ type: TOGGLE_IMG_BAS });
export const toggleBasketStat = (stat) => ({ type: TOGGLE_BASKET, stat });
export const setImg = (data) => ({ type: SET_IMAGE, data });
// export const setActualCart = (num) => ({ type: SET_ACTUAL_CART, num });
export const setPro = (data) => ({ type: SET_PRODUCT, data });
export const setRandom = () => ({ type: SET_RANDOM });
export const addProducts = (obj) => ({ type: ADD_PRODUCT, obj });
export const setResult = (prod, text) => ({ type: SET_RESULT, prod, text });
export const fetchHeart = () => ({ type: FETCH_HEART });
export const removeProducts = (id) => ({ type: REMOVE_PRODUCT, id });
export const setBasket = (data) => ({ type: SET_BASKET, data });
export const toggleForm = (stat) => ({ type: TOGGLE_FORM, stat });

export const fetchHearts = (id, r, result) => async (dispatch) => {
  await cartReaction.putHeart(id, r);
  dispatch(setProduct());
  if (result != null) {
    dispatch(setResultProd(result));
  }
};
export const setProduct = () => async (dispatch) => {
  let data = await cartReaction.getProduct();
  dispatch(setPro(data));
  dispatch(fetchHeart());
};
export const setBasketData = () => async (dispatch) => {
  let data = await cartReaction.getBasket();
  dispatch(setBasket(data));
  dispatch(activeBasImg());
};
export const setImages = () => async (dispatch) => {
  let image = await testApi.getTestObj();
  dispatch(setImg(image));
};
export const setCart = () => async (dispatch) => {
  dispatch(setImages());
  dispatch(setProduct());
  dispatch(setBasketData());
  dispatch(fetchHeart());
};
export const setResultProd = (text) => async (dispatch) => {
  let data = await axios
    .get('https://6254f77f89f28cf72b633678.mockapi.io/product?search=' + text)
    .then((el) => el.data);
  dispatch(setPagi(data.length));
  dispatch(setResult(data, text));
};
//dispatch(setResult(el.data))
export const addProduct = (id) => async (dispatch) => {
  cartReaction.putCartsFetch(id);

  let elem = await cartReaction.getCartId(id);
  await cartReaction.setShoppingData(elem);
  dispatch(setProduct());

  dispatch(setBasketData());
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

export const addUser = (values, bask) => (dispatch) => {
  axios.post('https://6254f77f89f28cf72b633678.mockapi.io/actual', { iser: values, data: bask });
};
// export const toggleActual = (trueId) => async (dispatch) => {
//   await productApi.setActualID(trueId);
//   let data = await productApi.getActualData();
//   dispatch(setActualCart(data));
// };

export default cartReducer;
/*export const setResultProd =
  (text, num = 1) =>
  async (dispatch) => {
    let data = await axios
      .get(
        'https://6254f77f89f28cf72b633678.mockapi.io/product?search=' +
          text +
          '&page=' +
          num +
          '&limit=12',
      )
      .then((el) => el.data);

    dispatch(setResult(data, text));
  };*/
