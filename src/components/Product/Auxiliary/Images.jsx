import React from 'react';
import { useSelector } from 'react-redux';
import prod from './../Product.module.css';
function Images({ img, status }) {
  let product = useSelector((state) => state.cart.product);
  return (
    <div className={prod.cont_images}>
      <div className={prod.cont_images_bidImg}>
        <img src={img} alt="nice" className={prod.bigImg_item} />
        {/* <img src="img/new2.png" alt="nice" className={prod.bigImg_item} />
        <img src="img/new3.png" alt="nice" className={prod.bigImg_item} />
        <img src="img/new4.png" alt="nice" className={prod.bigImg_item} /> */}
        {product
          .filter((el, index) => {
            return el.status === status && el.image != img;
          })
          .map((el, index) => {
            if (index <= 2) {
              return <img key={index} src={el.image} alt="nice" className={prod.bigImg_item} />;
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
              return <img key={index} src={el.image} alt="nice" className={prod.smallImg_item} />;
            }
          })}
      </div>
      <div className={prod.adaptive}>
        <img src={img} alt='nive' className={prod.adImg} />
        {product
          .filter((el, index) => {
            return el.status === status && el.image != img;
          })
          .map((el, index) => {
            if (index <= 6) {
              return <img key={index} src={el.image} alt="nice" className={prod.Img_item} />;
            }
          })}
      </div>
    </div>
  );
}

export default Images;
