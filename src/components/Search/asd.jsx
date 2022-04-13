import React from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Product = () => {
  let match = useMatch('/product/:name');
  let named = match.params.name;
  console.log(named);
  let pros = useSelector((state) => state.cart.product);
  return (
    <div>
      {pros
        .filter((el) => el.id === named)
        .map((el) => {
          console.log(el.image);
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
  );
};

export default Product;
