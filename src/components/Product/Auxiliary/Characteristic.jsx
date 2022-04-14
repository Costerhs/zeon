import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchHearts } from '../../../redux/reducers/cartReducer';
import { fetchActualHeart } from '../../../redux/reducers/productReducer';
import prod from './../Product.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
// name={actualItem.name}
// art={actualItem.articul}
// color={actualItem.color}
// price={actualItem.price}
// desc={actualItem.description}
// size={actualItem.size}
// lineNum={5}
// structure={actualItem.structure}
function Characteristic({
  fullObj,
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
}) {
  let navigate = useNavigate();
  // let flag = useSelector((state) => state.cart.product[id].cart);
  // console.log(flag);
  let colorArr = useSelector((state) => state.cart.colores);

  let dispatch = useDispatch();
  const toggleHeart = () => {
    dispatch(fetchActualHeart());
    let r = heart === true ? false : true;
    dispatch(fetchHearts(id, r));
  };
  const addToProduct = () => {
    dispatch(addProduct(fullObj));
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
              return (
                <div className={prod.colorItem}>
                  <div className={classNames(prod.opac)} style={style}></div>
                </div>
              );
            })}
          </div>
        </div>
        <h1 className={prod.price}>{price}р</h1>
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
          <button className={prod.addCart} onClick={addToProduct}>
            {' '}
            <img src="img/cartWhite.png" alt="nice" className={prod.btnImg} />
            <span className={prod.btnp}> Добавить в корзину</span>
          </button>
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
/*{!flag ? (
            <button className={prod.addCart} onClick={addToProduct}>
              {' '}
              <img src="img/cartWhite.png" alt="nice" className={prod.btnImg} />
              <span className={prod.btnp}> Добавить в корзину</span>
            </button>
          ) : (
            <button
              className={prod.addCart}
              onClick={() => {
                setFlag((el) => !el);
                return navigate('/cart');
              }}>
              {' '}
              <img src="img/cartWhite.png" alt="nice" className={prod.btnImg} />
              <span className={prod.btnp}> Перейти в корзину</span>
            </button>
          )}*/
/*<button className={prod.addCart} onClick={addToProduct}>
            {' '}
            <img src="img/cartWhite.png" alt="nice" className={prod.btnImg} />
            <span className={prod.btnp}> Добавить в корзину</span>
          </button>*/
