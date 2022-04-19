import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchHearts, setCart, setProduct } from '../../../redux/reducers/cartReducer';
import { fetchActualHeart } from '../../../redux/reducers/productReducer';
import prod from './../Product.module.css';

import { useNavigate } from 'react-router-dom';
import Color from './Color';

function Characteristic({
  fullObj,
  cart,
  id,
  heart,
  name,
  price,
  color,
  desc,
  art,
  size,
  lineNum,
  structure,
  oldPrice,
}) {
  let navigate = useNavigate();
  let colorArr = useSelector((state) => state.cart.colores);

  let dispatch = useDispatch();
  const toggleHeart = () => {
    dispatch(fetchActualHeart());
    let r = heart === true ? false : true;
    dispatch(fetchHearts(id, r));
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
          <div className={prod.item}>
            <h3 className={prod.h3}>Размерный ряд:</h3>
            <p className={prod.itemP}>{size}</p>
          </div>
          <div className={prod.item}>
            <h3 className={prod.h3}>Количество в линейке:</h3>
            <p className={prod.itemP}>{lineNum}</p>
          </div>
          <div className={prod.item}>
            <h3 className={prod.h3}>Состав ткани:</h3>
            <p className={prod.itemP}>{structure}</p>
          </div>
          <div className={prod.item}>
            <h3 className={prod.h3}>Материал:</h3>
            <p className={prod.itemP}>{structure}</p>
          </div>
        </div>
        {/**square_line */}
        <div className={prod.buttons}>
          {cart === false ? (
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
          )}
          <button className={prod.toggleElect} onClick={toggleHeart}>
            {' '}
            <img src={heart === true ? 'img/activeHearts.png' : 'img/whiteHeart.png'} alt="ce" />
          </button>
        </div>
      </div>
      {/*cont_square */}
    </div>
  );
}

export default Characteristic;
