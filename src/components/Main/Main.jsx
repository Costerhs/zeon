import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Swipers from './Mini/Swipers';
import main from './Main.module.css';
import Status from './Mini/Status';

function Main() {
  const pros = useSelector((state) => state.cart.product);
  const hit = pros.filter((el) => el.status === 'hit');
  const news = pros.filter((el) => el.status === 'new');

  return (
    <div className={main.boss}>
      <Swipers />
      <Status stat={hit} num={8} headtext={'Хит продаж'} />
      <Status stat={news} num={4} headtext={'Новинки'} />
    </div>
  );
}

export default Main;
/* <div className={main.hit_container}>
        <h1>Хит продаж</h1>
        <div className={main.hit_cart}>
          {hit.slice(0, count).map((el) => {
            return (
              <Cart
                data={el}
                heart={el.heart}
                key={el.id + el.color}
                id={el.id}
                name={el.name}
                price={el.price}
                size={el.size}
                img={el.image}
                oldPrice={el.oldPrice}
                color={el.color}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            setCount((el) => (el += 8));
          }}
          className={main.btn}>
          Еще
        </button>
      </div>*/
