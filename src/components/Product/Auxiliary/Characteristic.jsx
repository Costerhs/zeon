import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProduct,
  fetchHearts,
  setCart,
  setProduct,
  toggleBasketStat,
} from '../../../redux/reducers/cartReducer';
import { fetchActualHeart } from '../../../redux/reducers/productReducer';
import prod from './../Product.module.css';

import { useLocation, useNavigate } from 'react-router-dom';
import Color from './Color';
import classNames from 'classnames';

function Characteristic({
  fullObj,
  cart,
  id,
  heart,
  name,
  price,
  scan,
  color,
  desc,
  art,
  size,
  lineNum,
  structure,
  oldPrice,
}) {
  const [heartes, setHeartes] = useState(heart);
  let dispatch = useDispatch();
  let loation = useLocation();
  let bask = useSelector((state) => state.cart.basFetch);
  let res = scan.some((el) => {
    return el.elem.color == color;
  });
  if (res === true) {
    dispatch(toggleBasketStat(res));
  } else {
    dispatch(toggleBasketStat(res));
  }

  let navigate = useNavigate();
  let colorArr = useSelector((state) => state.cart.colores);

  const toggleHeart = () => {
    let r = heart === true ? false : true;
    dispatch(fetchHearts(id, r));
    setHeartes(el => el = !el)
  };
  const addToProduct = () => {
    dispatch(addProduct(id));
  };

  return (
    <div className={prod.forSquare}>
      <div className={prod.square}>
        {/*square */}
        <h1 className={prod.h}>{name}</h1>
        <div className={prod.articul}>
          <p className={prod.pAr}>Артикул:</p>
          <p>{art}</p>
        </div>
        <div className={prod.articul}>
          <p className={prod.pAr}>Цвет:</p>
          <div className={prod.colorGroup}>
            {colorArr.map((el, index) => {
              let ind = index + 1 == color;

              let style = {
                background: el,
                border: ind ? '2px solid' + el : null,
                marginTop: ind ? '-3px' : null,
              };
              return <Color id={id} key={el + index} num={index} styles={style} />;
            })}
          </div>
        </div>
        <h1 className={prod.price}>
          {price}р {oldPrice && <span className={prod.nones}>{oldPrice}</span>}
        </h1>
        <div className={prod.description}>
          <h2 className={prod.desc}>О товаре:</h2>
          <p className={prod.text}>{desc}</p>
        </div>
        <div className={prod.line}>
          <div className={classNames(prod.item, prod.marg)}>
            <h3 className={prod.h3}>Размерный ряд:</h3>
            <p className={prod.itemP}>{size}</p>
          </div>
          <div className={prod.item}>
            <h3 className={prod.h3}>Количество в линейке:</h3>
            <p className={prod.itemP}>{lineNum}</p>
          </div>
          <div className={classNames(prod.item, prod.marg, prod.margs)}>
            <h3 className={prod.h3}>Состав ткани:</h3>
            <p className={prod.itemP}>{structure}</p>
          </div>
          <div className={classNames(prod.item, prod.left)}>
            <h3 className={prod.h3}>Материал:</h3>
            <p className={prod.itemP}>{structure}</p>
          </div>
        </div>
        {/**square_line */}
        <div className={prod.buttons}>
          {bask === false ? (
            <button className={prod.addCart} onClick={addToProduct}>
              {' '}
              <div className={prod.btnContaineres}>
                <img
                  src="https://i.ibb.co/s9RCJpG/cart-White.png"
                  alt="nice"
                  className={prod.btnImg}
                />
              </div>
              <span className={prod.btnp}> Добавить в корзину</span>
            </button>
          ) : (
            <button
              className={prod.addCart}
              onClick={() => {
                navigate(loation.pathname + '/cart');
              }}>
              {' '}
              <div className={prod.btnContainer}>
                <img
                  src="https://i.ibb.co/s9RCJpG/cart-White.png"
                  alt="nice"
                  className={prod.btnImg}
                />
              </div>
              <span className={prod.btnp}> Перейти в корзину</span>
            </button>
          )}

          <button className={prod.toggleElect} onClick={toggleHeart}>
            {' '}
            <img
              className={prod.cerd}
              src={
                heartes === true
                  ? 'https://i.ibb.co/6FW30g4/Vector-23.png'
                  : 'https://i.ibb.co/QfhJLwZ/hearts.png'
              }
              alt="ce"
            />
          </button>
        </div>
      </div>
      {/*cont_square */}
    </div>
  );
}

export default Characteristic;
/* {cart === false ? (
            <button className={prod.addCart} onClick={addToProduct}>
              {' '}
              <img src="img/cartWhite.png" alt="nice" className={prod.btnImg} />
              <span className={prod.btnp}> Добавить в корзину</span>
            </button>
          ) : (
            <button
              className={prod.addCart}
              onClick={() => {
                navigate('/cart');
              }}>
              {' '}
              <img src="img/cartWhite.png" alt="nice" className={prod.btnImg} />
              <span className={prod.btnp}> Перейти в корзину</span>
            </button>
          )}*/
