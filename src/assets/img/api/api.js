import axios from 'axios';

const instance = axios.create({
  baseURL: `https://6254f77f89f28cf72b633678.mockapi.io/`,
});

export const cartReaction = {
  getProduct() {
    return instance.get('product').then((el) => el.data);
  },
  getBasket() {
    return instance.get('shopping').then((el) => el.data);
  },
  putHeart(id, r) {
    return instance.put('product/' + id, { heart: r });
  },
  putCartsFetch(id) {
    return instance.put('product/' + id, { cart: true });
  },
  getCartId(id) {
    return instance.get('product/' + id).then((el) => {
      return el.data;
    });
  },
  setShoppingData(obj) {
    return instance.post('shopping', { elem: obj, totalCount: 1 });
  },
  toggleColor(id, newColor) {
    return instance.put('product/' + id, { color: newColor + 1 });
  },
  plusCart(id, num) {
    return instance.put('shopping/' + id, { totalCount: num + 1 });
  },
  minusCart(id, num) {
    return instance.put('shopping/' + id, { totalCount: num - 1 });
  },
  falseCart(id) {
    return instance.put('product/' + id, { cart: false });
  },
  deleteShop(id) {
    return instance.delete('shopping/' + id);
  },
  // await axios.put('https://6254f77f89f28cf72b633678.mockapi.io/shopping/' + id, {
  //   totalCount: totalCount + 1,
  // });
};

export const productApi = {
  setActualID(obj) {
    return instance.put('actual/1', { actualId: obj });
  },
  getActualData() {
    return instance.get('actual/1').then((el) => el.data.actualId);
  },
};
