import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import elc from './Elect.module.css';
function Elect() {
  let obj = useSelector((state) => state.cart.product);
  return (
    <div className={elc.boss}>
      <div className={elc.wrap}>
        {obj
          .filter((el) => el.heart === true)
          .map((el) => {
            return (
              <Cart
                heart={el.heart}
                key={el.id}
                id={el.id}
                name={el.name}
                price={el.price}
                size={el.size}
                img={el.image}
                oldPrice={el.oldPrice}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Elect;
