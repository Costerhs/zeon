import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Bread from '../Mini/Bread';
import Burger from './Burger'
import hed from './Header.module.css'

function AdaptiveHead() {
    const [burgers, setBurgers] = useState(false)
    let logo = useSelector((state) => state.cart.images[0]?.headers.logo);

    return (
        <div>
            <>
                <Burger burgers={burgers} setBurgers={setBurgers} />
                <div className={hed.adaptHead}>
                    <div className={hed.adCent}>
                        <div className={hed.burger} onClick={() => setBurgers(true)}></div>
                        <div className={hed.zeon}><NavLink to={'/'}><img src={logo} className={hed.zeonImg} /></NavLink></div>
                        <div className={hed.lupas}></div>
                    </div>
                    <hr />
                    <div className={hed.breads}><Bread media={true} /></div>
                </div> </>
        </div>
    )
}

export default AdaptiveHead