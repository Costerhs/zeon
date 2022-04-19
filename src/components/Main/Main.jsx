import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Swipers from './Mini/Swipers';
import main from './Main.module.css';
import Status from './Mini/Status';
import Card from './Mini/Card';
import Minidesc from './Mini/Minidesc';

function Main() {
  const pros = useSelector((state) => state.cart.product);
  const hit = pros.filter((el) => el.status === 'hit');
  const news = pros.filter((el) => el.status === 'new');
  const neon = pros.filter((el) => el.status === 'neon');
  let arr = [hit.slice(0, 1), hit.slice(2, 3), news.slice(0, 1), neon.slice(0, 1)];

  return (
    <div className={main.bosses}>
      <Swipers />
      <div className={main.testing}>
        {' '}
        <Status stat={hit} num={8} headtext={'Хит продаж'} />
      </div>
      <div className={main.testing}>
        {' '}
        <Status stat={news} num={4} headtext={'Новинки'} />
      </div>
      <div className={main.collection}>
        <h1 className={main.mid}>Коллекции</h1>
        <div className={main.flexes}>
          {arr
            .flatMap((el) => el)
            .map((el) => {
              return <Card status={el.status} key={el.id} name={el.name} img={el.image} />;
            })}
        </div>
      </div>
      <div className={main.end}>
        <div className={main.mid}>
          <h1>Наши преимущества</h1>
        </div>
        <div className={main.flexes}>
          <Minidesc
            desc={'Мы проконсультируем и индивидуально подойдем к Вашему заказу'}
            head={'Профессиональная консультация'}
            img={'https://i.ibb.co/2NS1cWt/Vector-15.png'}
          />
          <Minidesc
            desc={'100% гарантия возврата товара - 14 дней на возврат, без скандалов и истерик.'}
            head={'Cвоевремнная доставка'}
            img={'https://i.ibb.co/WPCxdKv/truck-1.png'}
          />
          <Minidesc
            desc={'Промокоды со скидками для постоянных клиентов, акции  на новые позиции'}
            head={'Акции и бонусы для покупателей'}
            img={'https://i.ibb.co/K0q95MM/shop-2-1.png'}
          />
          <Minidesc
            desc={'Мы предлагаем возможность безналичной оплаты'}
            head={'Удобные способы оплаты'}
            img={'https://i.ibb.co/DCq4GW0/money-1.png'}
          />
        </div>
      </div>
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
