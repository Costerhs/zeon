import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Swipers from './Mini/Swipers';
import main from './Main.module.css';
import Status from './Mini/Status';
import Card from './Mini/Card';
import Minidesc from './Mini/Minidesc';
import classNames from 'classnames';

function Main() {
  const [countNews, setCountNews] = useState(4);
  const [countHits, setCountHits] = useState(8);
  const pros = useSelector((state) => state.cart.product);
  const hit = pros.filter((el) => el.status === 'hits').slice(0, countHits);
  const news = pros.filter((el) => el.status === 'new').slice(0, countNews);
  const neon = pros.filter((el) => el.status === 'neon');
  let arr = [hit.slice(0, 1), hit.slice(2, 3), news.slice(0, 1), neon.slice(0, 1)];
  const colls = useSelector(state => state.cart.images[0]?.colls);

  return (
    <div className={main.bosses}>
      <Swipers />
      <div>
        <div>
          <h1 className={main.mid}>Хит продаж</h1>
          <div className={main.testing}>
            {' '}
            <Status stat={hit} num={countHits} />
          </div>
          <div className={main.btn_conten}>
            {countHits <= hit.length ? <button
              onClick={() => {
                setCountHits((el) => (el += 8));
              }}
              className={classNames(main.btn)}>
              Еще
            </button> : null}
          </div>
        </div>
        <div>
          <h1 className={main.mid}>Новинки</h1>
          <div className={main.testing}>
            {' '}
            <Status stat={news} num={countNews} />
          </div>
          <div className={main.btn_conten}>
            {countNews <= news ? <button
              onClick={() => {
                setCountNews((el) => (el += 4));
              }}
              className={classNames(main.btn)}>
              Еще
            </button> : null}
          </div>
        </div>
      </div>
      {/* //////// */}
      <div className={main.collection}>
        <h1 className={main.mid}>Коллекции</h1>
        <div className={main.flexes}>
          {arr
            .flatMap((el) => el)
            .map((el, index) => {
              return <Card status={el.status} key={el.id} name={el.name} img={colls[index]} />;
            })}
        </div>
      </div>
      {/*  /////////////*/}
      <div className={main.end}>
        <div className={main.mid}>
          <p>Наши преимущества</p>
        </div>
        <div className={main.flexeses}>
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
/*<div className={main.testing}>
{' '}
<Status stat={hit} num={8} headtext={'Хит продаж'} />
</div>
<div className={main.testing}>
{' '}
<Status stat={news} num={4} headtext={'Новинки'} />
</div>*/
