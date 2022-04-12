import React, { useEffect, useRef, useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import hed from './Header.module.css';

import logo from './logo.png';
import heart from './img/heart.png';
import heartRed from './img/heartRed.png';
import shop from './img/shoppingRed.png';
import lupa from './img/lupa.png';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../../redux/reducers/cartReducer';
const Header = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let serk = useRef();
  let active = useSelector((el) => el.cart.activeRedH);
  //для тел
  let teleph = useRef(null);

  let [forTel, setForTel] = useState(false);
  const handleClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(teleph.current)) {
      setForTel((el) => (el = false));
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', handleClick);
  }, []);
  //для поиска\

  const setForResult = (event) => {
    if (event.keyCode === 13) {
      dispatch(setResult(serk.current.value));
      serk.current.value = '';
      return navigate('/search');
    }
  };
  return (
    <div>
      {' '}
      <div className={hed.boss}>
        <div className={hed.up}>
          <div className={hed.navi}>
            <div className={hed.navi__item}>
              <NavLink to={'/desc'} className={hed.none}>
                <p>О нас</p>
              </NavLink>
            </div>
            <div className={hed.navi__item}>
              <NavLink to={'/collection'} className={hed.none}>
                <p> Коллекции</p>
              </NavLink>
            </div>
            <div className={hed.navi__item}>
              <NavLink to={'/news'} className={hed.none}>
                <p>Новости</p>
              </NavLink>
            </div>
          </div>
          <div className={hed.tel} onClick={() => setForTel(true)} ref={teleph}>
            {forTel && (
              <div className={hed.hid}>
                <p>Телефоны</p>
                <p>+996 500 00 12 45</p>
                <p>+996 500 23 95 45</p>
                <p>+996 500 00 63 45</p>
              </div>
            )}
            <p>Тел:</p>
            <div>
              {' '}
              <p>+996 000 00 00 00</p>
            </div>
          </div>
        </div>
        <hr size="1" />
        <div className={hed.down}>
          <div className={hed.logo}>
            <NavLink to={'/'}>
              <img src={logo} alt="nice" />
            </NavLink>
          </div>
          <div className={hed.inp}>
            <input
              type="search"
              ref={serk}
              className={hed.input}
              placeholder="Поиск"
              onKeyDown={setForResult}
            />
            <img src={lupa} alt="nice" className={hed.lup} />
          </div>
          <div className={hed.plus}>
            <div className={hed.elect}>
              <NavLink className={hed.none} to={'elect'}>
                <img src={active === true ? heartRed : heart} alt="nice" className={hed.heart} />
                <p className={hed.elect_p}> Избранное</p>
              </NavLink>
            </div>
            {/*//////////////////////////////////////////////////////////////////// */}
            <div className={hed.cart}>
              <NavLink className={hed.none} to={'/cart'}>
                <img src={shop} alt="nice" className={hed.shop} />
                <p className={hed.cart_p}>Корзина</p>
              </NavLink>
            </div>
          </div>
        </div>
        <hr size="1" />
      </div>
    </div>
  );
};

export default Header;
