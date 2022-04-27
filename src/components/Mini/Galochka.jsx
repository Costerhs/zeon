import classNames from 'classnames';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleForm } from '../../redux/reducers/cartReducer';

function Galochka({ tois }) {
  let navi = useNavigate();
  const dispatch = useDispatch();
  let toggle = () => {
    dispatch(toggleForm(0));
    return navi('/main');
  };
  return (
    <div className={classNames("galochka", tois === true && 'forTellls')}>
      <div className="cont_icon">
        {' '}
        <img className="icon" src="https://i.ibb.co/JnsL98C/Vector-16.png" />
      </div>
      <h1 className="icon_h1"> Спасибо!</h1>
      <p className="icon_p">Ваша заявка была принята ожидайте,скоро Вам перезвонят</p>
      <div className="btn_cont">
        <button className="icon_btn" onClick={toggle}>
          Продолжить покупку
        </button>
      </div>
    </div>
  );
}

export default Galochka;
