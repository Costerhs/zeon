import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import sear from './Search.module.css';
import Similar from '../Similar/Similar';

function Search() {
  // let result = useSelector((state) => state.cart.result);
  // let pros = useSelector((state) => state.cart.product);
  // console.log(result);
  let res = useSelector((state) => state.cart.result);
  let resultText = useSelector((state) => state.cart.concurrence);
  return (
    <div className={sear.boss}>
      <div className={sear.zagol}>
        {' '}
        {res.length === 0 ? (
          <div>
            <div>
              <h1>По вашему запросу ничего не найдено</h1>
            </div>
            <div>
              <Similar />
            </div>
          </div>
        ) : (
          <h1 className={sear.her}>Результаты поиска по запросу: {resultText}</h1>
        )}
      </div>
      <div className={sear.wrap}>
        {res.map((el) => {
          return (
            <Cart
              result={resultText}
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
{
  /* <div className={sear.wrap}>
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
</div> */
}
