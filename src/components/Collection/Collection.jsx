import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import Cart from '../Cart/Cart';
import Card from '../Main/Mini/Card';
import Pagination from '../Mini/Pagination';
import Similar from '../Similar/Similar';
import coll from './Collection.module.css';
function Collection() {
  let match = useMatch('/collection/:statusId');
  let pros = useSelector((state) => state.cart.product);
  const colls = useSelector(state => state.cart.images[0]?.colls);

  let actualStatus = match != null ? pros.filter((el) => el.status === match.params.statusId) : [1];

  const hit = pros.filter((el) => el.status === 'hits');
  const news = pros.filter((el) => el.status === 'new');
  const neon = pros.filter((el) => el.status === 'neon');
  let arr = [hit.slice(0, 1), hit.slice(2, 3), news.slice(0, 1), neon.slice(0, 1)];
  let [pagi, setPagi] = useState(1);
  let [touch, setTouch] = useState(4);
  let forze = (num) => {
    setPagi((el) => (el = num));
    window.scroll(0, 0)
  };
  useEffect(() => {
    setPagi(1);
  }, [match])
  return (
    <div className={coll.boss}>
      <h1 className={coll.hed}>
        Коллекции {match != null ? ' ' + match.params.statusId.toUpperCase() : null}
      </h1>
      <div className={coll.cont}>
        {match != null ? (
          actualStatus.slice((pagi * 12) - 12, pagi * 12).map((el) => {
            return (
              <Cart
                isColl
                nesting
                data={el}
                heart={el.heart}
                key={el.id}
                id={el.id}
                name={el.name}
                price={el.price}
                size={el.size}
                img={el.image}
                oldPrice={el.oldPrice}
                color={el.color}
              />
            );
          })
        ) : (
          <div className={coll.flexes}>
            {arr
              .flatMap((el) => el)
              .map((el, index) => {
                return <div className={coll.forLast}> <Card status={el.status} key={el.id} name={el.name} img={colls[index]} /> </div>;
              })}
          </div>
        )}
        {match != null && (
          <div className={coll.pagin}>
            <Pagination setTouch={setTouch} pagi={pagi} setPagi={setPagi} touch={touch} forze={forze} pagin={Math.round(actualStatus.length / 12 + 0.4)}
            />
          </div>
        )}
        {match != null ? <Similar not pro stat={'new'} /> : null}
      </div>
    </div>
  );
}

export default Collection;
