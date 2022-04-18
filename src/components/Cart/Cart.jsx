import cart from './Cart.module.css';
import React from 'react';

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHearts, setRandom, toggleActual } from '../../redux/reducers/cartReducer';
import classNames from 'classnames';
import { toggleId } from '../../redux/reducers/productReducer';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import 'swiper/css/scrollbar';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper';

function Cart({ name, heart, data, similar, price, size, color, img, id, oldPrice }) {
  let colorArr = useSelector((state) => state.cart.colores);
  const slides = [];
  let fost = Array.isArray(img);
  let dispatch = useDispatch();
  //для активации сердечка
  const activeHeart = () => {
    let r = heart === true ? false : true;
    dispatch(fetchHearts(id, r));
  };
  //процент и для детальной страницы
  let percent = Math.round((oldPrice - price) / (oldPrice / 100));
  let setIdForProduct = () => {
    dispatch(toggleId(data));
    dispatch(toggleActual(id));
    dispatch(setRandom());
    window.scroll(0, 0);
  };
  return (
    <div>
      {/* скидка */}
      {oldPrice != null ? (
        <div className={cart.three}>
          <img src="img/three.png" alt="nice" className={cart.imgThree} />
          <p className={cart.procent}>{percent}%</p>
        </div>
      ) : null}{' '}
      <div
        className={classNames(
          similar ? cart.boss : cart.bossSim,
          fost === true ? cart.forHover : cart.forPassiv,
        )}>
        {/* фото и сердечко */}
        <div className={classNames(cart.img, cart.blockImg)}>
          <img
            src={heart === false ? 'img/hearts.png' : 'img/activeHearts.png'}
            alt=""
            className={fost === true ? cart.heartHover : cart.heart}
            onClick={activeHeart}
          />
          {/*для фото */}
          {fost === true ? (
            <div>
              <Swiper
                modules={[Pagination, Autoplay, Scrollbar]}
                spaceBetween={0}
                id="main"
                tag="section"
                wrapperTag="ul"
                scrollbar={{
                  hide: false,
                  draggable: true,
                }}
                style={{ listStyleType: 'none' }}>
                {img.map((el, index) => {
                  slides.push(
                    <SwiperSlide key={`slide-${index}`} tag="li">
                      <img
                        className={(cart.img, cart.refa)}
                        src={el}
                        style={{ listStyleType: 'none' }}
                        alt={`Slide ${1}`}
                      />
                    </SwiperSlide>,
                  );
                })}{' '}
                {slides}
              </Swiper>
            </div>
          ) : (
            <img src={img} alt="nice" className={classNames(cart.img, cart.refa)} />
          )}
          {/*для фото */}
        </div>
        <div
          className={classNames(cart.char, {
            pad: fost,
          })}>
          {/* нащвание размер цена и тд */}
          <NavLink to={'/product'} className={cart.none} onClick={setIdForProduct}>
            <h2 className={cart.h2}>{name}</h2>
            <h2 className={cart.price}>
              {price} р <span className={cart.oldPrice}>{oldPrice}</span>
            </h2>
            <h2 className={cart.size}>Размер: {size}</h2>
          </NavLink>
          <div className={cart.colorGroup}>
            {colorArr.map((el, index) => {
              let ind = index + 1 == color;

              let style = {
                background: el,
                border: ind ? '2px solid' + el : null,
                marginTop: ind ? '-3px' : null,
              };
              return (
                <div className={cart.colorItem}>
                  <div className={classNames(cart.opac)} style={style}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
