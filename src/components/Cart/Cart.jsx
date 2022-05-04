import cart from './Cart.module.css';
import React, { useRef, useState } from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHearts, setRandom } from '../../redux/reducers/cartReducer';
import classNames from 'classnames';
import { toggleId } from '../../redux/reducers/productReducer';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './stule.css';
import 'swiper/css/scrollbar';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar } from 'swiper';
import { delay, result } from 'lodash';

function Cart({
  isColl,
  name,
  heart,
  result,
  data,
  similar,
  price,
  size,
  color,
  img,
  id,
  oldPrice,
}) {
  const [heartes, setHeartes] = useState(heart);
  let colorArr = useSelector((state) => state.cart.colores);
  let image = useSelector((state) => state.cart.images);
  let location = useLocation();
  let men = useRef(null);
  let fost = Array.isArray(img);
  let dispatch = useDispatch();
  //для активации сердечка
  const activeHeart = () => {
    let r = heart === true ? false : true;
    setHeartes(el => el = !el)
    if (result != null) {
      dispatch(fetchHearts(id, r, result));
    } else {
      dispatch(fetchHearts(id, r));
    }
  };
  //процент и для детальной страницы
  let percent = Math.round((oldPrice - price) / (oldPrice / 100));
  let setIdForProduct = () => {
    dispatch(toggleId(id));
    dispatch(setRandom());
    window.scroll(0, 0);
  };

  let lastLocation;
  if (location.pathname === '/') {
    lastLocation = '/product';
  } else if (location.pathname.indexOf('product') >= 0) {
    lastLocation = location.pathname;
  } else {
    lastLocation = location.pathname + '/product';
  }
  const changeimg = (e) => {
    console.log(e)
    let x = e.pageX,
      y = e.pageY;

    console.log(men);
    console.log(x - e.target.getBoundingClientRect().left)
  }
  return (
    <div>
      {/* скидка */}

      <div
        className={classNames(
          similar ? cart.boss : cart.bossSim,
          fost === true ? cart.forHover : cart.forPassiv,
        )}>
        {/* фото и сердечко */}
        <div className={classNames(cart.img, cart.blockImg)}>
          {oldPrice != null ? (
            <div className={classNames(cart.three, similar === true && cart.sThree)}>
              <img src={image[0].three} alt="nice" className={cart.imgThree} />
              <p className={cart.procent}>{percent}%</p>
            </div>
          ) : null}{' '}
          <img
            src={heartes === false ? image[0].heart : image[0].activeHeart}
            alt="heart"
            className={classNames(
              fost === true ? cart.heartHover : cart.heart,
              similar === true && fost === true && cart.sHeart,
              similar === true && fost !== true && cart.simHeart,
            )}
            onClick={activeHeart}
          />
          {/*для фото */}
          {fost === true ? (
            <div ref={men} onMouseMove={changeimg} className={classNames(similar === true && cart.swpp, cart.obych)} >
              {img.map((el, index) => {
                return <img
                  className={classNames(similar === true ? cart.simItim : cart.itim, 'fotochka')}
                  src={el}
                  style={{ listStyleType: 'none' }}
                  alt={`Slide ${1}`}
                />
              })}

            </div>
          ) : (
            <img
              src={img}
              alt="nice"
              className={classNames(cart.img, cart.refa, similar === true && cart.sImg)}
            />
          )}
          {/*для фото */}
        </div>
        <div
          className={classNames(
            similar === true && cart.sChar,
            cart.char,
            fost === true ? cart.pades : null,
            similar === true && fost === false && cart.forSim,
          )}>
          {/* нащвание размер цена и тд */}
          <NavLink to={lastLocation} className={cart.none} onClick={setIdForProduct}>
            <h2 className={fost ? cart.swH2 : cart.h2}>{name}</h2>
            <h2 className={fost ? cart.swPrice : cart.price}>
              {price} р <span className={cart.oldPrice}>{oldPrice}</span>
            </h2>
            <h2 className={cart.size}>Размер: {size}</h2>
          </NavLink>
          <div className={cart.colorGroup}>
            {colorArr.map((el, index) => {
              let ind = index + 1 == color;

              let style = {
                background: el,
                // border: ind ? '1px solid' + el : null,
                // marginTop: ind ? '9px' : null,
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
/*<div className={classNames(cart.opac)} style={style}></div> */
/* to={location.pathname === '/' ? '/product' : location.pathname + '/product'}*/
