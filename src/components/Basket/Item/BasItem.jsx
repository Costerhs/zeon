import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusProduct, removeProduct } from '../../../redux/reducers/cartReducer';
import bas from '../Basket.module.css';
function BasItem({ el }) {
  let dispatch = useDispatch();
  let act = useSelector((state) => state.cart.basket[el.id].totalCount);

  const plusing = () => {
    dispatch(plusProduct(el.id));
  };
  const remove = () => {
    dispatch(removeProduct(el.id));
  };
  return (
    <div className={bas.item}>
      <img src={'img/' + el.image + '.png'} alt="nice" className={bas.img} />
      <div>
        <p className={bas.h}>{el.name}</p>
        <p className={bas.h2}>Размер: {el.size}</p>
        <div className={bas.colores}>
          <div className={bas.contP}>
            <p className={bas.p}>Цвет:</p>
          </div>
          <div className={bas.contCircle}>
            {' '}
            <div className={bas.circle}></div>
          </div>
        </div>{' '}
        {/*colores*/}
        <h1 className={bas.price}>{el.price} р</h1>
        <div className={bas.contBtn}>
          <button className={bas.btn}>-</button>
          <p className={bas.count}>{act}</p>
          <button className={bas.btn} onClick={plusing}>
            +
          </button>
        </div>
      </div>
      <div className={bas.x} onClick={remove}>
        <img src="img/x.png" alt="nice" className={bas.xImg} />
      </div>{' '}
    </div>
  );
}

export default BasItem;
