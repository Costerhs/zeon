import React from 'react';
import { NavLink } from 'react-router-dom';
import main from '../Main.module.css';
function Card({ img, name }) {
  return (
    <div className={main.collection_container}>
      <div className={main.collection_item}>
        <img src={img} alt="" />
        <p>{name}</p>
        <div className={main.btn_cont}>
          <NavLink to={'/collection'}>
            <button className={main.cl_btn}>Смотреть все</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
