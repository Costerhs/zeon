import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import bas from '../Basket.module.css';
function Total({ sumPrice, allProductCount, oldPrice, line }) {
  let navi = useNavigate();
  const navigateCheck = () => {
    return navi('/check');
  };
  return (
    <div className={bas.itog}>
      <div className={bas.contDesc}>
        <h4>Сумма заказа</h4>
        <div className={bas.desc}>
          <p className={bas.left}>Количество линеек:</p>
          <p className={bas.right}>{line} шт</p>
        </div>
        <div className={bas.desc}>
          <p className={bas.left}>Количество товаров:</p>
          <p className={bas.right}>{allProductCount} шт</p>
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
