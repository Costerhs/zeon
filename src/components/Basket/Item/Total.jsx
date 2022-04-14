import React from 'react';
import bas from '../Basket.module.css';
function Total({ price, allProduct, line }) {
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
          <p className={bas.right}>{allProduct} шт</p>
        </div>
        <div className={bas.desc}>
          <p className={bas.left}>Стоимость:</p>
          <p className={bas.right}>{price} рублей</p>
        </div>
        <div className={bas.desc}>
          <p className={bas.left}>Скидка:</p>
          <p className={bas.right}>125 рублей</p>
        </div>
        <div className={bas.dotted}></div>
        <div className={bas.desc}>
          <p className={bas.left}>Итого к оплате:</p>
          <p className={bas.right}>6 700 рублей</p>
        </div>
        <div className={bas.contEnd}>
          <button className={bas.end}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default Total;
