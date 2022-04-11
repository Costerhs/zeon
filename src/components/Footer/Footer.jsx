import React, { useState } from 'react';
import foot from './Footer.module.css';
import logob from './../../assets/img/logoBlack.png';
import { NavLink } from 'react-router-dom';

import ring from './../../assets/img/ring.png';
import mess from './../../assets/img/message.png';
import telegram from './../../assets/img/telegram.png';
import whats from './../../assets/img/whats.png';
import inst from './../../assets/img/inst.png';
const Footer = () => {
  let [forTel, setForTel] = useState(false);

  return (
    <div className={foot.boss}>
      <div className={foot.item}>
        <div className={foot.forLogo}>
          <img src={logob} alt="" className={foot.logo} />
        </div>
        <div className={foot.block}>
          <h4>Компания</h4>
          <NavLink to={'/desc'} className={foot.none}>
            <p>О нас</p>
          </NavLink>
          <NavLink to={'/news'} className={foot.none}>
            <p>Новости</p>
          </NavLink>
          <NavLink to={'/help'} className={foot.none}>
            <p>Помощь</p>
          </NavLink>
        </div>
        {/* <div className={foot.block}>
         {forTel z}
        </div> */}
        <div className={foot.flex}>
          <div className={foot.blockS} onClick={() => setForTel((el) => !el)}>
            <h4>Контакты</h4>
            <p>
              {' '}
              <img src={ring} alt="nice" className={foot.icon} /> +996 500 123 456
            </p>
            <p>
              {' '}
              <img src={ring} alt="nice" className={foot.icon} /> +996 500 123 456
            </p>
            <a href="https://www.google.com/intl/ru/gmail/about/" className={foot.adre}>
              {' '}
              <img src={mess} alt="nice" className={foot.mess} /> mail@gmail.com
            </a>{' '}
          </div>
          <div>
            {forTel && (
              <div className={foot.blockHid}>
                <h4>Доп. контакты</h4>
                <p>
                  {' '}
                  <img src={ring} alt="nice" className={foot.icon} /> +996 500 123 456
                </p>
                <p>
                  {' '}
                  <img src={ring} alt="nice" className={foot.icon} /> +996 500 123 456
                </p>
                <p>
                  {' '}
                  <img src={ring} alt="nice" className={foot.icon} /> +996 500 123 456
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={foot.block}>
          <h4>Мы в социальных сетях:</h4>
          <a href="https://www.instagram.com/zeon.ithub/" className={foot.none}>
            <p>
              {' '}
              <img src={inst} alt="nice" className={foot.tel} />
              Instagram
            </p>
          </a>
          <a href="https://web.telegram.org/z/" className={foot.none}>
            <p>
              {' '}
              <img src={telegram} alt="nice" className={foot.tel} />
              Telegram
            </p>
          </a>
          <a href="https://www.whatsapp.com/?lang=ru" className={foot.none}>
            <p>
              {' '}
              <img src={whats} alt="nice" className={foot.tel} />
              Whatsapp
            </p>
          </a>
        </div>
      </div>
      <p className={foot.info}>Developed by Zeon 2022</p>
    </div>
  );
};

export default Footer;
// {id:1,price:1222,status:'hit',color:'red',name:'platye',flag:false}
// 1
/* <h4>Контакты</h4>

          <p>
            {' '}
            <img src={ring} alt="nice" className={foot.icon} /> +996 500 123 456
          </p>

          <p>
            {' '}
            <img src={ring} alt="nice" className={foot.icon} /> +996 500 123 456
          </p>

          <a href="https://www.google.com/intl/ru/gmail/about/" className={foot.adre}>
            {' '}
            <img src={mess} alt="nice" className={foot.mess} /> mail@gmail.com
          </a>*/
