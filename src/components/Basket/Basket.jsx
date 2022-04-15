import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBasketData } from '../../redux/reducers/cartReducer';
import bas from './Basket.module.css';
import BasItem from './Item/BasItem';
import Total from './Item/Total';
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
      </div>
      <Total
        line={allProduct.length}
        sumPrice={sumPrice}
        oldPrice={sumOldPrice}
        allProductCount={fullCount}
      />
    </div>
  );
}

export default Basket;
