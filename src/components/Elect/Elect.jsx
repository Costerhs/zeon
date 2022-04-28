import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Cart from '../Cart/Cart';
import Similar from '../Similar/Similar';
import elc from './Elect.module.css';
function Elect() {
  let obj = useSelector((state) => state.cart.product);
  let res = obj.some((el) => el.heart === true) === true;
  console.log(res)
  // let [exist, setExist] = useState(res);
  // console.log(exist)


  let hearts =
    res ? (
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

        <Similar search />
      </>
    );
  let text = res === true ? `Товаров в избранном:${hearts.length}` : 'У вас пока нет избранных товаров'
  return (
    <div className={elc.boss}>
      <div className={elc.desc}>
        {' '}
        <h1 className={elc.el_text}>Избранное</h1>
        <p className={elc.count}>{text} </p>
      </div>
      <div className={elc.wrap}>{hearts}</div>
      {/* <div className={elc.sim}>
        <Similar />
      </div> */}
    </div>
  );
}

export default Elect;
