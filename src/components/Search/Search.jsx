import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';

function Search() {
  let result = useSelector((state) => state.cart.concurrence);
  let pros = useSelector((state) => state.cart.product);
  console.log(Array.isArray(pros));
  return (
    <div>
      <h1>результаты поиска</h1>
      <div>
        {pros
          .filter((el) => el.name.match(result) !== null)
          .map((el) => {
            return <Cart name={el.name} price={el.price} size={el.size} img={el.image} />;
          })}
      </div>
    </div>
  );
}

export default Search;
