import cart from './Cart.module.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchHearts } from '../../redux/reducers/cartReducer';
import classNames from 'classnames';
{
  /* <NavLink to={'/product/' + el.id} className={sear.none}></NavLink> */
}
function Cart({ name, heart, price, size, color, img, id, oldPrice }) {
  let dispatch = useDispatch();
  const activeHeart = () => {
    dispatch(fetchHearts(id));
  };

  let percent = Math.round(price / (oldPrice / 100));

  return (
    <div>
      {oldPrice != null ? (
        <div className={cart.three}>
          <img src="img/three.png" alt="nice" className={cart.imgThree} />
          <p className={cart.procent}>{percent}%</p>
        </div>
      ) : null}{' '}
      <div className={cart.boss}>
        <div className={classNames(cart.img, cart.blockImg)}>
          <img
            src={heart === false ? 'img/hearts.png' : 'img/activeHearts.png'}
            alt=""
            className={cart.heart}
            onClick={activeHeart}
          />
          <img src={'img/' + img + '.png'} alt="nice" className={classNames(cart.img, cart.refa)} />
        </div>
        <div className={cart.char}>
          <NavLink to={'/product/' + id} className={cart.none}>
            <h2 className={cart.h2}>{name}</h2>
            <h2 className={cart.price}>
              {price} р <span className={cart.oldPrice}>{oldPrice}</span>
            </h2>
            <h2 className={cart.size}>Размер: {size}</h2>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Cart;
