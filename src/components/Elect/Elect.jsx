import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import Similar from '../Similar/Similar';
import elc from './Elect.module.css';
function Elect() {
  let obj = useSelector((state) => state.cart.product);
  let hearts =
    obj.some((el) => el.heart === true) === true ? (
      obj
        .filter((el) => el.heart === true)
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
        })
    ) : (
      <>
        <h1>Пока в избранном ничего нет</h1>
        <Similar />
      </>
    );

  return (
    <div className={elc.boss}>
      <div className={elc.desc}>
        {' '}
        <h1>Избранное</h1>
        <p className={elc.count}>Товаров в избранном:{hearts.length} </p>
      </div>
      <div className={elc.wrap}>{hearts}</div>
      {/* <div className={elc.sim}>
        <Similar />
      </div> */}
    </div>
  );
}

export default Elect;
