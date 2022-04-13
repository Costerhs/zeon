import cart from './Cart.module.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHearts, setRandom } from '../../redux/reducers/cartReducer';
import classNames from 'classnames';
import { toggleId } from '../../redux/reducers/productReducer';
{
  /* <NavLink to={'/product/' + el.id} className={sear.none}></NavLink> */
}
function Cart({ name, heart, data, price, size, color, img, id, oldPrice }) {
  let colorArr = useSelector((state) => state.cart.forColor);

  let dispatch = useDispatch();
  const activeHeart = () => {
    dispatch(fetchHearts(id));
  };

  let percent = Math.round(price / (oldPrice / 100));
  let setIdForProduct = () => {
    dispatch(toggleId(data));
    dispatch(setRandom());
  };
  return (
    <div>
      {/* скидка */}
      {oldPrice != null ? (
        <div className={cart.three}>
          <img src="img/three.png" alt="nice" className={cart.imgThree} />
          <p className={cart.procent}>{percent}%</p>
        </div>
      ) : null}{' '}
      <div className={cart.boss}>
        {/* фото и сердечко */}
        <div className={classNames(cart.img, cart.blockImg)}>
          <img
            src={heart === false ? 'img/hearts.png' : 'img/activeHearts.png'}
            alt=""
            className={cart.heart}
            onClick={activeHeart}
          />
          <img src={'img/' + img + '.png'} alt="nice" className={classNames(cart.img, cart.refa)} />
          {/* <img src={'img/hit1.png'} alt="nice" className={classNames(cart.img, cart.refa)} /> */}
        </div>
        <div className={cart.char}>
          {/* нащвание размер цена и тд */}
          <NavLink to={'/product'} className={cart.none} onClick={setIdForProduct}>
            <h2 className={cart.h2}>{name}</h2>
            <h2 className={cart.price}>
              {price} р <span className={cart.oldPrice}>{oldPrice}</span>
            </h2>
            <h2 className={cart.size}>Размер: {size}</h2>
          </NavLink>
          <div className={cart.colorGroup}>
            {colorArr.map((el, index) => {
              let colors = index === 0 || index === 2 ? cart.coloru : cart.color;

              return (
                <div className={cart.colorItem}>
                  <div className={cart.opac}></div>
                  <img
                    key={el.id}
                    src={'img/color/' + el + '.png'}
                    className={el == color ? cart.colorActive : colors}
                    alt=""
                    // className={cart.colorActive}
                  />
                </div>
              );
            })}
            {/* <img src="img/color/color1.png" className={cart.color} alt="" />
            <img src="img/color/color2.png" className={cart.coloru} alt="" />
            <img src="img/color/color3.png" className={cart.color} alt="" />
            <img src="img/color/color4.png" className={cart.color} alt="" />
            <img src="img/color/color5.png" className={cart.color} alt="" />
            <img src="img/color/color6.png" className={cart.color} alt="" />
            <img src="img/color/color7.png" className={cart.color} alt="" />
            <img src="img/color/color8.png" className={cart.coloru} alt="" /> */}
            {/* <div style={background}></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
