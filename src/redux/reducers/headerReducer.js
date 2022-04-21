import produce from 'immer';

const SET_RESULT = 'SET_RESULT';

let intialize = {
  history: {
    '': 'Главная',
    collection: 'Коллекции',
    news: 'Новости',
    help: 'Помщщь',
    hit: 'хиты',
    desc: 'О нас',
    neon: 'Неоновые платья',
    new: 'Новые платья',
    product: 'Детальная страница товара',
    elect: 'Избранное',
    cart: 'Корзина',
  },
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
