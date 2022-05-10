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


function Cart({ name, heart, result, similar, price, size, img, id, oldPrice, }) {
  let dispatch = useDispatch();
  let location = useLocation();

  let [imgCount, setImgCount] = useState(0);
  const [heartes, setHeartes] = useState(heart);

  let colorArr = useSelector((state) => state.cart.colores);
  let image = useSelector((state) => state.cart.images);

  let men = useRef(null);
  let fost = Array.isArray(img);

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


  let wess = {};
  if (men.current !== null) {
    wess = { width: men.current.offsetWidth / img.length + 'px' }
  }
  let lastLocation;
  if (location.pathname === '/') {
    lastLocation = '/product';
  } else if (location.pathname.indexOf('product') >= 0) {
    // lastLocation = location.pathname;
    lastLocation = '/product';
  } else if (location.pathname.indexOf('cart') >= 0) {
    // lastLocation = location.pathname;
    lastLocation = '/product';
  } else {
    lastLocation = location.pathname + '/product';
  }

  const changeimg = (e) => {
    let x = e.pageX - e.target.getBoundingClientRect().left;
    let width = e.target.width / img.length;
    let states = x / width;

    for (let i = 1; i <= img.length; i++) {
      if (states <= i && states > i - 1) {
        setImgCount(i - 1)
      }
    }
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
          <img src={heartes === false ? image[0].heart : image[0].activeHeart} alt="heart" className={classNames(fost === true ? cart.heartHover : cart.heart, similar === true && fost === true && cart.sHeart, similar === true && fost !== true && cart.simHeart,)} onClick={activeHeart} />
          {/*для фото */}
          {fost === true ? (
            <div ref={men} onMouseMove={changeimg} className={classNames(similar === true && cart.swpp, cart.obych)} >

              <img className={classNames(similar === true ? cart.simItim : cart.itim, 'fotochka')} src={img[imgCount]} style={{ listStyleType: 'none' }} alt={`Slide ${1}`} />
              <div className={cart.indicat}>
                {img.map((el, index) => {
                  return <div style={wess} className={classNames(cart.bullet, index === imgCount && cart.activeBullet)}></div>
                })}
              </div>

            </div>
          ) : (
            <img src={img} alt="nice" className={classNames(cart.img, cart.refa, similar === true && cart.sImg)} />)}
          {/*для фото */}
        </div>
        <div
          className={classNames(similar === true && cart.sChar, cart.char, fost === true ? cart.pades : null, similar === true && fost === false && cart.forSim,)}>
          {/* нащвание размер цена и тд */}
          <NavLink to={lastLocation} className={cart.none} onClick={setIdForProduct}>
            <h2 className={fost ? cart.swH2 : cart.h2}>{name}</h2>
            <h2 className={fost ? cart.swPrice : cart.price}>
              {price} р <span className={cart.oldPrice}>{oldPrice}</span>
            </h2>
            <h2 className={cart.size}>Размер: {size}</h2>
          </NavLink>
          <div className={cart.colorGroup}>
            {colorArr.map((el) => {
              return (
                <div className={cart.colorItem}>
                  <div className={classNames(cart.opac)} style={{ background: el }}></div>
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
