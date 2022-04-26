import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { toggleForm } from '../../../redux/reducers/cartReducer';
import bas from '../Basket.module.css';
function Total({ sumPrice, allProductCount, oldPrice, line }) {
  // let navi = useNavigate();
  let dispatch = useDispatch();
  const navigateCheck = () => {
    dispatch(toggleForm(1));
    // return navi('/check');
  };
  return (
    <div className={bas.itog}>
      <div className={bas.contDesc}>
        <div className={bas.hedsss}>
          {' '}
          <h4>Сумма заказа</h4>
        </div>
        <div className={bas.desc}>
          <p className={bas.left}>Количество линеек:</p>
          <p className={bas.right}>{line} шт</p>
        </div>
        <div className={bas.desc}>
          <p className={bas.left}>Количество товаров:</p>
          <p className={bas.right}>{allProductCount * 5} шт</p>
        </div>
        <div className={bas.desc}>
          <p className={bas.left}>Стоимость:</p>
          <p className={bas.right}>{oldPrice} рублей</p>
        </div>
        <div className={bas.desc}>
          <p className={bas.left}>Скидка:</p>
          <p className={bas.right}>{oldPrice - sumPrice} рублей</p>
        </div>
        <div className={bas.dotted}></div>
        <div className={bas.desc}>
          <p className={bas.left}>Итого к оплате:</p>
          <p className={bas.right}>{sumPrice}рублей</p>
        </div>
        <div className={bas.contEnd} onClick={navigateCheck}>
          <button className={bas.end}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Total;
