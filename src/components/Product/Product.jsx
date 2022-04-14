import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Similar from '../Similar/Similar';
import Characteristic from './Auxiliary/Characteristic';
import Images from './Auxiliary/Images';

import prod from './Product.module.css';
const Product = () => {
  let actualItem = useSelector((el) => el.product.actualItem);
  let [flag, setFlag] = useState(false);
  return (
    <div className={prod.boss}>
      <div className={prod.cont}>
        {' '}
        <Images img={actualItem.image} status={actualItem.status} id={actualItem.id} />
        {/* images */}
        <Characteristic
          setFlag={() => {
            setFlag((el) => !el);
          }}
          flag={flag}
          fullObj={actualItem}
          heart={actualItem.heart}
          id={actualItem.id}
          name={actualItem.name}
          art={actualItem.articul}
          color={actualItem.color}
          price={actualItem.price}
          desc={actualItem.descritpion}
          size={actualItem.size}
          lineNum={5}
          structure={actualItem.structure}
        />
      </div>
      <Similar />
    </div>
  );
};

export default Product;
/* <div>
        {pros
          .filter((el) => el.id === actual)
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
      </div> */
