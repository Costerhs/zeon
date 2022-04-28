import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import sear from './Search.module.css';
import Similar from '../Similar/Similar';
import PagionationSearch from './PagionationSearch';
import Pagination from '../Mini/Pagination';

function Search() {
  let res = useSelector((state) => state.cart.result);
  let resultText = useSelector((state) => state.cart.concurrence);
  let pagin = Math.round(useSelector((state) => state.cart.paginationCount) / 12 + 0.4);

  let [pagi, setPagi] = useState(1);
  useEffect(() => {
    setPagi(1);
  }, [res])
  let [touch, setTouch] = useState(4);
  let forze = (num) => {
    setPagi((el) => (el = num));
    window.scroll(0, 0)
  };
  return (
    <div className={sear.boss}>
      <div className={sear.zagol}>
        {' '}
        {res.length === 0 ? (
          <div>
            <div>
              <h1 className={sear.resultText}>Результаты поиска по запросу :{resultText}</h1>
              <p className={sear.nothing}>По вашему запросу ничего не найдено</p>
            </div>
            <div>
              <Similar search />
            </div>
          </div>
        ) : (<>
          <h1 className={sear.her}>Результаты поиска по запросу: {resultText}</h1>
        </>
        )}
      </div>
      <div className={sear.wrap}>
        {res.slice((12 * pagi) - 12, 12 * pagi).map((el) => {
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
      {res.length === 0 ? null :
        <Pagination
          forze={forze}
          pagi={pagi}
          setPagi={setPagi}
          pagin={pagin}
          setTouch={setTouch}
          touch={touch}
        />}
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
