import React from 'react';
import { useSelector } from 'react-redux';
import Cart from './../Cart/Cart';
import sim from './Similar.module.css';

function Similar() {
  let product = useSelector((state) => state.cart.product);
  let random = useSelector((state) => state.cart.random);
  let news = product
    .filter((el) => el.status === 'new')
    .filter((el, index) => index === random[0] || index === random[3]);
  let hit = product
    .filter((el) => el.status === 'hit')
    .filter((el, index) => index === random[1] || index === random[4] || index === random[2]);
  //   let plyazh = product.filter((el) => el.status === 'plyazh').filter((el, index) => index === f[2]);

  let orr = [news, hit];

  return (
    <div className={sim.boss}>
      <h1>Похожие товары:</h1>
      <div className={sim.cont}>
        {orr
          .flatMap((el) => el)
          .map((el) => {
            return (
              <div className={sim.cart}>
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
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Similar;
