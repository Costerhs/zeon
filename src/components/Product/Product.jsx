import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import prod from './Product.module.css';

import Similar from '../Similar/Similar';
import Characteristic from './Auxiliary/Characteristic';
import Images from './Auxiliary/Images';

const Product = () => {
  let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setCart());
  // }, []);
  let ids = useSelector((el) => el.cart.actualCart);
  let actualItems = useSelector((el) => el.cart.product).filter((el) => el.id == ids);

  return (
    <div className={prod.boss}>
      {' '}
      {actualItems.map((actualItem) => {
        return (
          <div className={prod.cont}>
            {' '}
            <Images img={actualItem.image} status={actualItem.status} id={actualItem.id} />
            {/* images */}
            <Characteristic
              cart={actualItem.cart}
              fullObj={actualItem}
              heart={actualItem.heart}
              id={actualItem.id}
              name={actualItem.name}
              art={actualItem.articul}
              color={actualItem.color}
              price={actualItem.price}
              oldPrice={actualItem.oldPrice}
              desc={actualItem.descritpion}
              size={actualItem.size}
              lineNum={5}
              structure={actualItem.structure}
            />
          </div>
        );
      })}
      <Similar />
    </div>
  );
};

export default Product;
