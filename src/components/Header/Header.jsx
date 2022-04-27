import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import hed from './Header.module.css';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setResult, setResultProd } from '../../redux/reducers/cartReducer';

import heart from './img/heart.png';
import heartRed from './img/heartRed.png';
import lupa from './img/lupa.png';
import classNames from 'classnames';
import Bread from '../Mini/Bread';

const Header = () => {
  let [forTel, setForTel] = useState(false);
  let [searches, setSearches] = useState(false);

  let active = useSelector((el) => el.cart.activeRedH);
  let hint = useSelector((state) => state.cart.product);
  let activeOrPassive = useSelector((state) => state.cart.activeBasketImg);
  let logo = useSelector((state) => state.cart.images[0]?.headers.logo);
  let numbers = useSelector((state) => state.cart.images[0]?.headers.tel);
  let cols = useSelector(state => state.head.cols);
  /////////////////////////////////////
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let set = new Set();
  const setData = () => { };
  let serk = useRef();
  hint.map((el, index) => set.add(el.name));
  // let options = set.forEach((el, index, set) => {
  //   return console.log(sets)
  //   // { value: index, label: el }
  // })
  // console.log(options)
  //для тел
  let teleph = useRef(null);


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
      dispatch(setResultProd(serk.current.value));
      serk.current.value = '';
      setSearches(false)
      return navigate('/search');
    }
  };
  const setForResultHid = (event) => {

    dispatch(setResultProd(event));
    serk.current.value = '';
    setSearches(false)
    return navigate('/search');



  }
  return (
    <div className={hed.cent}>
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
                {numbers.map((el) => {
                  return <p>{el}</p>;
                })}
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
              {/*///////////// */}
            </NavLink>
          </div>
          <div className={hed.inp}>

            <input type="search" ref={serk} className={hed.input} placeholder="Поиск" onClick={() => setSearches(true)} onKeyDown={setForResult} />
            <img src={lupa} alt="nice" className={hed.lup} />
            <div className={classNames(hed.over, searches && hed.back)}>

              {cols.map(el => {
                return <div onClick={setForResultHid.bind(this, el)} className={hed.over_item}><p>{el}</p></div>
              })}
            </div>
          </div>
          <div className={hed.plus}>
            <div className={hed.elect}>
              <NavLink className={hed.none} to={'elect'}>
                <img src={active === true ? heartRed : heart} alt="nice" className={hed.heart} />
                <p className={hed.elect_p}> Избранное</p>
              </NavLink>
            </div>
            {/*//////////////////////////////////////////////////////////////////// */}
            <div className={hed.cart} onClick={setData}>
              <NavLink className={hed.none} to={'/cart'}>
                <img src={activeOrPassive ? 'https://i.ibb.co/Qr4MSYq/shopping-Red.png' : 'https://i.ibb.co/XF2gwwG/shopping-bag-1-1.png'} alt="nice" className={hed.shop} />
                <p className={hed.cart_p}>Корзина</p>
              </NavLink>
            </div>
          </div>
        </div>
        <hr size="1" />
        <div className={hed.cot}>
          <Bread />
        </div>
      </div>
    </div>
  );
};

export default Header;
/* <div className={hed.inp}>
            <input type="search" ref={serk} className={hed.input} placeholder="Поиск" onKeyDown={setForResult} />
            <img src={lupa} alt="nice" className={hed.lup} />
          </div>*/