import cart from './Cart.module.css';
import React from 'react';

function Cart({ name, price, size, color, img }) {
  return (
    <div className={cart.boss}>
      <div className={cart.img}>
        <img src={'img/' + img + '.png'} alt="nice" />
      </div>
      <div className={cart.char}>
        <h2 className={cart.h2}>{name}</h2>
        <p className={cart.price}>{price} р</p>
        <p className={cart.size}>Размер: {size}</p>
      </div>
    </div>
  );
}

export default Cart;
