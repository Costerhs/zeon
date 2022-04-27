import classNames from 'classnames';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Galochka from '../components/Mini/Galochka';
import { addUser, toggleForm } from '../redux/reducers/cartReducer';
function Form() {
  let [sat, setSat] = useState('https://i.ibb.co/rHQk9Tq/twemoji-flag-for-flag-kyrgyzstan.png');
  let [check, setCheck] = useState(false)
  let si = {
    1: 'https://i.ibb.co/rHQk9Tq/twemoji-flag-for-flag-kyrgyzstan.png',
    2: 'https://i.ibb.co/g6ngk7J/Vector-18.png',
    3: 'https://i.ibb.co/M9sZQz3/Vector-19.png'
  }
  let navi = useNavigate();
  let [fetch, setFetch] = useState(false);
  const dispatch = useDispatch();
  let bask = useSelector((state) => state.cart.basket);
  let toggle = () => {
    dispatch(toggleForm(0));
    return navi('/main');
  };

  let toggles = () => {
    dispatch(toggleForm(0));

  };
  const order = () => {
    const values = getValues();

    dispatch(addUser(values, bask));
    setFetch(true);
  };

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log('yes');
  };

  const style = { color: 'red' };
  const border = { border: '1px solid red' };
  return (
    <>
      {' '}
      {fetch == false ? (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h1">Оформление заказа</h1>
          <div className='ixis'><img onClick={toggles} className='ixis_img' src='https://i.ibb.co/g6ngk7J/Vector-18.png' /></div>
          <div className="item">
            <p className="p" style={errors?.name && style}>
              Ваше имя
            </p>{' '}
            <input
              style={errors?.name && border}
              className="inp"
              type="text"
              placeholder="Например иван"
              {...register('name', {
                required: 'Поле обязательна к заполнению',
              })}
            />
          </div>
          <div className="item">
            <p className="p" style={errors?.family && style}>
              Ваше фамилие
            </p>{' '}
            <input
              style={errors?.family && border}
              className="inp"
              type="text"
              {...register('family', {
                required: 'Поле обязательна к заполнению',
              })}
              placeholder="Например Иванович"
            />
          </div>
          <div className="item">
            <p className="p" style={errors?.email && style}>
              {' '}
              Ваша почта
            </p>{' '}
            <input
              style={errors?.email && border}
              className="inp"
              type="email"
              {...register('email', {
                required: 'Поле обязательна к заполнению',
              })}
              placeholder="example@mail.com"
            />
          </div>
          <div className={classNames("item", "numItems")}>
            <p className="ps" style={errors?.tel && style}>
              Ваш номер
            </p>{' '}
            <div className='tesr'>
              <select form="data" style={{ backgroundImage: `url(${sat})` }} className="sele" onClick={(event) => { setSat(els => els = si[event.target.value]) }}>

                <option value='1'>+996</option>
                <option value='2'>+7</option>
                <option value='3'>+32</option>

              </select>
            </div>
            <input
              style={errors?.tel && border}
              className={classNames("inp", "numinp")}
              type="number"
              {...register('tel', {
                required: 'Поле обязательна к заполнению',
                minLength: {
                  value: 9,
                  message: 'Должно быть больше 9 цифр',
                },
              })}
              placeholder="Введите номер телефона"
            />
          </div>
          <div className="item">
            <p className="p" style={errors?.country && style}>
              Страна
            </p>{' '}
            <input
              style={errors?.country && border}
              className="inp"
              type="text"
              {...register('country', {
                required: 'Поле обязательна к заполнению',
              })}
              placeholder="Введите страну"
            />
          </div>
          <div className="item">
            <p className="p" style={errors?.city && style}>
              Город
            </p>{' '}
            <input
              style={errors?.city && border}
              {...register('city', {
                required: 'Поле обязательна к заполнению',
              })}
              className="inp"
              type="text"
              placeholder="Введите город"
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" value={check} onClick={() => setCheck(el => !el)} className="checks" />
            <p className="ofera">
              {' '}
              Согласен с условиями{' '}
              <NavLink to={'/public'} onClick={toggle} className="ofer_a">
                публичной оферы
              </NavLink>{' '}
            </p>
          </div>
          <div className="btnDiv">
            {' '}
            <input
              type="submit"
              disabled={isValid === false || check === false}
              onClick={order}
              className="submit"
              value={'Заказать'}
            />
          </div>
        </form>
      ) : (
        <Galochka toggle={toggle} />
      )}
    </>
  );
}

export default Form;
