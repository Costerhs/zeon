import React from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Card from '../Main/Mini/Card';
import Similar from '../Similar/Similar';
import coll from './Collection.module.css';
function Collection() {
  let match = useMatch('/collection/:statusId');
  let pros = useSelector((state) => state.cart.product);
  const hit = pros.filter((el) => el.status === 'hit');
  const news = pros.filter((el) => el.status === 'new');
  const neon = pros.filter((el) => el.status === 'neon');
  let arr = [hit.slice(0, 1), hit.slice(2, 3), news.slice(0, 1), neon.slice(0, 1)];

  return (
    <div className={coll.boss}>
      <h1>Коллекции {match != null ? '/ ' + match.params.statusId.toUpperCase() : null}</h1>
      <div className={coll.cont}>
        {match != null ? (
          pros
            .filter((el) => el.status === match.params.statusId)
            .map((el) => {
              return (
                <Cart
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
              .map((el) => {
                return <Card status={el.status} key={el.id} name={el.name} img={el.image} />;
              })}
          </div>
        )}
        {match != null ? <Similar not pro stat={'new'} /> : null}
      </div>
    </div>
  );
}

export default Collection;
