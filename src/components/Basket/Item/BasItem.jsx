import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minussProduct, plusProduct, removeProduct } from '../../../redux/reducers/cartReducer';
import bas from '../Basket.module.css';
function BasItem({ el, actId, totalCount }) {
  let dispatch = useDispatch();
  let colores = useSelector((state) => state.cart.colores)[Number(el.color) - 1];

  const plusing = () => {
    dispatch(plusProduct(actId, totalCount));
  };
  const remove = () => {
    dispatch(removeProduct(actId, el.id));
  };
  const minuss = () => {
    dispatch(minussProduct(actId, totalCount, el.id));
  };
  return (
    <div className={bas.item}>
      <img src={el.image} alt="nice" className={bas.img} />
      <div>
        <p className={bas.h}>{el.name}</p>
        <p className={bas.h2}>Размер: {el.size}</p>
        <div className={bas.colores}>
          <div className={bas.contP}>
            <p className={bas.p}>Цвет:</p>
          </div>
          {/** */}

          <div className={bas.contCircle} style={{ border: '1px solid' + colores }}>
            {' '}
            <div className={bas.circle} style={{ backgroundColor: colores }}></div>
            {/** */}
          </div>
        </div>{' '}
        {/*colores*/}
        <h1 className={bas.price}>
          {el.price} р {el.oldPrice && <span className={bas.oldPrice}>{el.oldPrice}</span>}
        </h1>
        <div className={bas.contBtn}>
          <button className={bas.btn} onClick={minuss}>
            -
          </button>
          <p className={bas.count}>{totalCount}</p>
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
