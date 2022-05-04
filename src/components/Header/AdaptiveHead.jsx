import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { setResultProd, setForResultHid } from '../../redux/reducers/cartReducer';
import Bread from '../Mini/Bread';
import Burger from './Burger'
import hed from './Header.module.css'
import lupa from './img/lupa.png';
function AdaptiveHead() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [burgers, setBurgers] = useState(false)
    const [search, setSearch] = useState(false)
    let [searches, setSearches] = useState(false);
    let fones = useRef(null);
    let serk = useRef();
    let cols = useSelector(state => state.head.cols);
    let logo = useSelector((state) => state.cart.images[0]?.headers.logo);

    const setForResult = (event) => {

        // if (event.keyCode === 13) {
        dispatch(setResultProd(serk.current.value));
        console.log(serk.current.value)
        // serk.current.value = '';
        // setSearches(false)

        // }


        return navigate('/search');
    };
    const forKeyCode = (event) => {
        if (event.keyCode === 13) {
            setSearch(false)

        }
    }
    const setForResultHid = (event) => {

        dispatch(setResultProd(event));
        serk.current.value = '';
        setSearches(false)
        setSearch(false)
        return navigate('/search');



    }

    return (
        <div>
            <>
                <Burger burgers={burgers} setBurgers={setBurgers} />
                <div className={hed.adaptHead}>
                    <div className={hed.adCent}>
                        <div className={hed.burger} onClick={() => setBurgers(true)}></div>
                        <div className={hed.zeon}><NavLink to={'/'}><img src={logo} className={hed.zeonImg} /></NavLink></div>
                        <div className={classNames(hed.lupas, search === true && hed.activeLup)} onClick={() => { setSearch(el => el = !el) }}></div>
                    </div>
                    <hr />
                    <div className={hed.breads}><Bread media={true} /></div>
                </div> </>
            {search && <div className={hed.inp}>

                <input type="search" ref={serk} className={hed.input} placeholder="Поиск" onClick={() => setSearches(true)} onKeyDown={forKeyCode} onChange={setForResult} />
                <img src={lupa} alt="nice" className={hed.lup} />
                <div className={classNames(hed.over, searches && hed.back)}>

                    {cols.map(el => {
                        return <div ref={fones} onClick={setForResultHid.bind(this, el)} className={hed.over_item}><p>{el}</p></div>
                    })}
                </div>
                <div></div>
            </div>}
        </div>
    )
}

export default AdaptiveHead


/* <div className={hed.poisk}>
                <input type='text' className={hed.poisk_inp} />
                <div className={hed.pods}>

                </div>
            </div>*/