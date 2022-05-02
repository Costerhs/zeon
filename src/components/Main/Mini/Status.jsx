import classNames from 'classnames';
import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import main from '../Main.module.css';
function Status({ num, stat, headtext }) {
  const [count, setCount] = useState(num);

  return (
    <div className={main.hit_container}>

      <div className={main.hit_cart}>
        {stat.map((el) => {
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

    </div>
  );
}

export default Status;
