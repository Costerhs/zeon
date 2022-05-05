import classNames from 'classnames';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import prod from './../Product.module.css';
function Images({ img, status }) {
  let product = useSelector((state) => state.cart.product);
  let [count, setCount] = useState(null);
  return (
    <div className={prod.cont_images}>
      <div className={prod.cont_images_bidImg}>
        <img src={img} onClick={() => { setCount(1) }} alt="nice" className={classNames(prod.bigImg_item, count === 1 && prod.activeImg)} />
        {/* <img src="img/new2.png" alt="nice" className={prod.bigImg_item} />
        <img src="img/new3.png" alt="nice" className={prod.bigImg_item} />
        <img src="img/new4.png" alt="nice" className={prod.bigImg_item} /> */}
        {product
          .filter((el, index) => {
            return el.status === status && el.image != img;
          })
          .map((el, index) => {
            if (index <= 2) {
              return <img key={index} onDoubleClick={() => { setCount(0) }} onClick={() => { setCount(index + 2) }} src={el.image} alt="nice" className={classNames(prod.bigImg_item, count === index + 2 && prod.activeImg)} />;
            }
          })}
      </div>
      <div className={prod.cont_images_smallImg}>
        {product
          .filter((el, index) => {
            return el.status === status && el.image != img;
          })
          .map((el, index) => {
            if (index <= 3) {
              return <img key={index} onDoubleClick={() => { setCount(0) }} onClick={() => { setCount(index + 5) }} src={el.image} alt="nice" className={classNames(prod.smallImg_item, count === index + 5 && prod.activeImg)} />;
            }
          })}
      </div>
      <div className={prod.adaptive}>
        <img src={img} alt='nive' onClick={() => { setCount(1) }} onDoubleClick={() => { setCount(0) }} className={classNames(prod.adImg, count === 1 && prod.activeImg)} />
        {product
          .filter((el, index) => {
            return el.status === status && el.image != img;
          })
          .map((el, index) => {
            if (index <= 6) {
              return <img key={index} onClick={() => { setCount(index + 2) }} onDoubleClick={() => { setCount(0) }} src={el.image} alt="nice" className={classNames(prod.Img_item, count === index + 2 && prod.activeImg)} />;
            }
          })}
      </div>
    </div>
  );
}

export default Images;
