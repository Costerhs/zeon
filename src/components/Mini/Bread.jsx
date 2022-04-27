import classNames from 'classnames';
import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import hed from './../Header/Header.module.css'
function Bread({ media }) {
    let loca = useLocation();
    let obj = useSelector((state) => state.head.history);
    const navi = useNavigate();

    let res = loca.pathname === '/' ? null : loca.pathname.split('/');
    let result = [];

    if (Array.isArray(res)) {
        for (let elem of res) {
            for (let key in obj) {
                if (elem === key) {
                    result.push({ name: obj[elem], navigate: key });
                }
            }
        }
    }
    const navis = (dat) => {
        let kol = res;
        let numIn = res.indexOf(dat) + 1;
        let all = res.length - numIn;
        for (let i = 0; i < all; i++) {
            kol.pop();
        }
        return navi(kol.join('/'));
    };
    return (<>
        {result.map((el, index) => {
            return (
                <div onClick={navis.bind(this, el.navigate)} className={classNames(hed.bread, media && hed.mrg)}>
                    {el.name} <span key={index} className={hed.spn}>/</span>
                </div>
            );
        })}</>
    )
}

export default Bread