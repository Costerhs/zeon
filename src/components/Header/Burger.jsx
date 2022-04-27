import React from 'react'
import { NavLink } from 'react-router-dom'
import hed from './Header.module.css'
function Burger({ burgers, setBurgers }) {
    const toggle = () => {
        setBurgers(false)
    }
    return (<>
        {burgers === true ? <div className={hed.containers}>
            <div className={hed.menu}>
                <div className={hed.navis}>
                    <div className={hed.uper}>
                        <p>Меню</p> <div className={hed.ix} onClick={toggle}></div>
                    </div>
                    <div className={hed.navis__items}>
                        <NavLink to={'/desc'} className={hed.nones}>
                            <p className={hed.text_nav} onClick={toggle}> О нас</p>
                        </NavLink>
                    </div>
                    <div className={hed.navis__items}>
                        <NavLink to={'/news'} className={hed.nones}>
                            <p className={hed.text_nav} onClick={toggle}>Новости</p>
                        </NavLink>
                    </div>
                    <div className={hed.navis__items} >
                        <NavLink to={'/collection'} className={hed.nones}>
                            <p className={hed.text_nav} onClick={toggle}> Коллекция</p>
                        </NavLink>
                    </div>

                </div>{/*navis */}
                <div className={hed.just_line}></div>
                <div className={hed.cart_elect}>
                    <div className={hed.Adelect}>
                        <NavLink className={hed.noneses} to={'elect'}>
                            <img src={'https://i.ibb.co/fdy4LWN/Vector-25.png'} alt="nice" className={hed.Adheart} />
                            <p className={hed.Adelect_p}> Избранное</p>
                        </NavLink>
                    </div>

                    <div className={hed.Adcart} >
                        <NavLink className={hed.noneses} to={'/cart'}>
                            <img src={'https://i.ibb.co/XF2gwwG/shopping-bag-1-1.png'} alt="nice" className={hed.Adshop} />
                            <p className={hed.Adcart_p}>Корзина</p>
                        </NavLink>
                    </div>
                </div>

            </div>
            <div className={hed.fons} onClick={() => setBurgers(false)}></div>
        </div> : null}
    </>
    )
}

export default Burger