import produce from 'immer';

const SET_RESULT = 'SET_RESULT';

let intialize = {
  history: {
    '': 'Главная',
    collection: 'Коллекции',
    news: 'Новости',
    help: 'Помощь',
    hits: 'хиты',
    desc: 'О нас',
    neon: 'Неоновые платья',
    new: 'Новые платья',
    product: 'Детальная страница товара',
    elect: 'Избранное',
    cart: 'Корзина',
    search: 'Поиск',
    public:'Публичная оферта'
  },
  cols: ['Вечернее Платье', 'Белое платье', 'Неоновая одежда'],
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
