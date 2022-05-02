import classNames from 'classnames'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleForm } from '../../../redux/reducers/cartReducer';

function AdaptiveTotal() {
    let dispatch = useDispatch();
    const [ok, setOk] = useState(false)
    const navigateCheck = () => {
        dispatch(toggleForm(1));
        // return navi('/check');
    };


    return (
        <div className='total'>
            <div className={classNames('first', ok && 'yeah')}>
                <p className='endes'>Сумма заказа</p>
                <div className='double'>
                    <p className='gray'>Общее количество</p>
                    <p className='black'>4 линеек (20 шт.)</p>
                </div>
                <div className='double'>
                    <p className='gray'>Стоимость</p>
                    <p className='black'>6823 рублей</p>
                </div>
                <div className='lines'></div>
            </div>
            <div className='last'>
                <div className='double'>
                    <p className='gray'>Итого к оплате</p>
                    <p className='black'>6823 рублей</p>
                </div>
                <div className='none'>
                    <button className='btes' onClick={() => setOk(el => el = !el)}>
                        {ok ? 'Скрыть' : 'Информация о заказе'}
                    </button>
                </div>
                <div className='ofor' onClick={navigateCheck}>
                    <button className='btnOfor'>Оформление заказ</button>
                </div>
            </div>
        </div>
    )
}

export default AdaptiveTotal