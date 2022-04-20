import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Galochka from '../components/Mini/Galochka';
import { toggleForm } from '../redux/reducers/cartReducer';
function Form() {
  let navi = useNavigate();
  let [fetch, setFetch] = useState(false);
  const dispatch = useDispatch();
  let toggle = () => {
    dispatch(toggleForm(0));
    return navi('/main');
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onChange' });
  let { a } = useForm;
  const onSubmit = (data) => {
    console.log(data);
  };

  const style = { color: 'red' };
  const border = { border: '1px solid red' };
  return (
    <>
      {' '}
      {fetch == false ? (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h1">Оформление заказа</h1>
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
              placeholder="ivan@mail.com"
            />
          </div>
          <div className="item">
            <p className="p" style={errors?.tel && style}>
              Ваш номер
            </p>{' '}
            <input
              style={errors?.tel && border}
              className="inp"
              type="number"
              {...register('tel', {
                required: 'Поле обязательна к заполнению',
              })}
              placeholder="700101010"
            />
          </div>
          <div className="item">
            <p className="p" style={errors?.country && style}>
              Место проживания
            </p>{' '}
            <input
              style={errors?.country && border}
              className="inp"
              type="text"
              {...register('country', {
                required: 'Поле обязательна к заполнению',
              })}
              placeholder="Россия"
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
              placeholder="Город"
            />
          </div>
          <div className="checkbox">
            <input type="checkbox" className="checks" />
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
              disabled={!isValid}
              onClick={() => {
                setFetch(true);
              }}
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
