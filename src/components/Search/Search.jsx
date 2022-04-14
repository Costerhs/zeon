import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import sear from './Search.module.css';
function Search() {
  let result = useSelector((state) => state.cart.result);
  let pros = useSelector((state) => state.cart.product);

  return (
    <div className={sear.boss}>
      <div className={sear.zagol}>
        {' '}
        <h1 className={sear.her}>Результаты поиска по запросу: {result}</h1>
        {result === '' && (
          <div>
            <h1>По вашему запросу ничего не найдено</h1>
          </div>
        )}
      </div>
      <div className={sear.wrap}>
        {pros
          .filter((el) => el.name.match(result) !== null && result !== '')
          .map((el) => {
            return (
              <Cart
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
          })}
      </div>
    </div>
  );
}

export default Search;
/* let result = useSelector((state) => state.head.concurrence);
  let pros = useSelector((state) => state.cart.product);

  return (
    <div className={sear.boss}>
      <div className={sear.zagol}>
        {' '}
        <h1 className={sear.her}>Результаты поиска по запросу: {result}</h1>
        {result === '' && (
          <div>
            <h1>По вашему запросу ничего не найдено</h1>
          </div>
        )}
      </div>
      <div className={sear.wrap}>
        {pros
          .filter((el) => el.name.match(result) !== null && result !== '')
          .map((el) => {
            return (
              <Cart
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
          })}
      </div>
    </div>*/
