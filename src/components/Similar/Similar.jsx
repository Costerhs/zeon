import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './../Cart/Cart';
import sim from './Similar.module.css';

function Similar({ not, pro, stat }) {
  let product = useSelector((state) => state.cart.product);
  let random = useSelector((state) => state.cart.random);
  let neon = product
    .filter((el) => el.status === 'neon')
    .filter((el, index) => index === random[3]);
  let news = product.filter((el) => el.status === 'new').filter((el, index) => index === random[0]);
  let hit = product
    .filter((el) => el.status === 'hits')
    .filter((el, index) => index === random[1] || index === random[4] || index === random[2]);
  //   let plyazh = product.filter((el) => el.status === 'plyazh').filter((el, index) => index === f[2]);

  let orr = pro ? product.filter((el) => el.status === stat).slice(0, 5) : [news, hit, neon];

  return (
    <div className={sim.boss}>
      <h1>{not === true ? 'Новинки' : 'Похожие товары:'}</h1>
      <div className={sim.cont}>
        {orr
          .flatMap((el) => el)
          .map((el, index) => {
            return (
              <div className={sim.cart}>
                <Cart
                  similar={true}
                  data={el}
                  heart={el.heart}
                  key={el.id + el.index}
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
