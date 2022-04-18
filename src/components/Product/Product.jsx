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
  let status = '';

  return (
    <div className={prod.boss}>
      {' '}
      {actualItems.map((actualItem, index) => {
        status = actualItem.status;
        return (
          <div className={prod.cont}>
            {' '}
            <Images
              img={actualItem.image}
              key={actualItem.id + index}
              status={actualItem.status}
              id={actualItem.id}
            />
            {/* images */}
            <Characteristic
              key={index + actualItem.id}
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
      <Similar stat={status} pro />
    </div>
  );
};

export default Product;
