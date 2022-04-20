import React, { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../../redux/reducers/cartReducer';
import Galochka from './Galochka';
function Telephones() {
  let dispatch = useDispatch();
  let [fetch, setFetch] = useState(false);
  const normal = () => {
    dispatch(toggleForm(0));
  };

  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => {};
  return (
    <>
      {fetch === false ? (
        <div className="container_tel">
          <img onClick={normal} src="https://i.ibb.co/g6ngk7J/Vector-18.png" className="minuss" />
          <div className="raspol">
            <div className="tel_itemes">
              <h1 className="item_h1">Если у Вас остались вопросы</h1>
              <p className="tel_p">Оставьте заявку и мы обязательно </p>
              <p className="tel_p">Вам Перезвоним </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="tel_form">
              <div className="tel_cont">
                {/* <img src="https://i.ibb.co/167fmYg/Group-1251.png" className="img_inp" /> */}
                <input
                  className={classNames('tel_inp', 'people')}
                  type="name"
                  {...register('name', {
                    required: 'Поле обязательна к заполнению',
                  })}
                  placeholder="Как к Вам обращаться?"
                />
              </div>
              <div className="tel_cont">
                <input
                  placeholder="Номер телефона"
                  className={classNames('tel_inp', 'ring')}
                  type="number"
                  {...register('number', {
                    required: 'Поле обязательна к заполнению',
                  })}
                />
              </div>
            </form>
            <div className="tel_btn">
              <input
                onClick={() => setFetch(true)}
                type="submit"
                disabled={!isValid}
                className="submit_tel"
                value={'Заказать звонок'}
              />
            </div>
          </div>
        </div>
      ) : (
        <Galochka />
      )}
    </>
  );
}

export default Telephones;
