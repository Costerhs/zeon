import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import main from '../Main.module.css';
function Status({ num, stat, headtext }) {
  const [count, setCount] = useState(num);

  return (
    <div className={main.hit_container}>
      <h1>{headtext}</h1>
      <div className={main.hit_cart}>
        {stat.slice(0, count).map((el) => {
          return (
            <Cart
              data={el}
              heart={el.heart}
              key={el.id + el.color}
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
      <button
        onClick={() => {
          setCount((el) => (el += num));
        }}
        className={main.btn}>
        Еще
      </button>
    </div>
  );
}

export default Status;
