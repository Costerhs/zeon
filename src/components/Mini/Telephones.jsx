import React, { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../../redux/reducers/cartReducer';
import Galochka from './Galochka';
import { postTell } from '../../redux/reducers/productReducer';
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
  } = useForm({ mode: 'all' });
  const onSubmit = (data) => {
    dispatch(postTell(data))
  };
  const border = { border: '1px solid red' };
  return (
    <>
      {fetch === false ? (
        <div className="container_tel">
          <img onClick={normal} src="https://i.ibb.co/g6ngk7J/Vector-18.png" className="minuss" />
          <div className="raspol">
            <div className="tel_itemes">
              <h1 className="item_h1">Если у Вас остались вопросы</h1>
              <p className="tel_p">Оставьте заявку и мы обязательно Вам Перезвоним </p>
              {/* <p className="tel_p"></p> */}
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="tel_form">
              <div className="tel_cont">
                {/* <img src="https://i.ibb.co/167fmYg/Group-1251.png" className="img_inp" /> */}
                <input
                  style={errors?.name && border}
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
                  style={errors?.number && border}
                  placeholder="Номер телефона"
                  className={classNames('tel_inp', 'ring')}
                  type="number"
                  {...register('number', {
                    required: 'Поле обязательна к заполнению',
                    minLength: {
                      value: 9
                    },
                    maxLength: {
                      value: 9
                    }
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
        <Galochka tois={true} />
      )}
    </>
  );
}

export default Telephones;
