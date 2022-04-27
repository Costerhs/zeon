import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBasketData } from '../../redux/reducers/cartReducer';
import bas from './Basket.module.css';
import BasItem from './Item/BasItem';
import Total from './Item/Total';
import Similar from './../Similar/Similar'

function Basket() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBasketData());
  }, []);
  let allProduct = useSelector((el) => el.cart.basket);
  let fullCount = allProduct.map((el) => el.totalCount).reduce((el, sum) => el + sum, 0);
  let sumPrice = allProduct
    .map((el) => el.elem.price * el.totalCount)
    .reduce((el, sum) => el + sum, 0);
  let sumOldPrice = allProduct
    .map((el) => (el.elem.oldPrice !== null ? el.elem.oldPrice : el.elem.price) * el.totalCount)
    .reduce((el, sum) => el + sum, 0);

  return (
    <div className={bas.boss}>
      <div className={bas.items}>
        {allProduct.map((el) => {
          return <BasItem key={el.id} el={el.elem} actId={el.id} totalCount={el.totalCount} />;
        })}
        {allProduct.length === 0 && <> <div className={bas.ifNot}>
          <h1 className={bas.korTExt}>Корзина</h1>
          <p className={bas.korT}>У вас пока нет товаров в корзине</p>
        </div>
          <div className={bas.simis}>
            <Similar search={true} />
          </div>
        </>}
      </div>
      {allProduct.length !== 0 &&
        <Total
          line={allProduct.length}
          sumPrice={sumPrice}
          oldPrice={sumOldPrice}
          allProductCount={fullCount}
        />
      }
    </div>
  );
}

export default Basket;
