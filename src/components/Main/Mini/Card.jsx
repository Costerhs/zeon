import React from 'react';
import { NavLink } from 'react-router-dom';
import main from '../Main.module.css';
function Card({ img, status }) {
  return (
    <div className={main.collection_container}>
      <div className={main.shadow}></div>
      <div className={main.collection_item}>
        <div className={main.imgRes} style={{ backgroundImage: `url(${img})` }}>
          {/* <img src={img} alt="nice" className={main.imges} /> */}
        </div>
        <p className={main.statText}>{status}</p>
        <div className={main.btn_cont}>
          <NavLink
            onClick={() => {
              window.scroll(0, 0);
            }}
            to={'/collection/' + status}>
            <button className={main.cl_btn}>Смотреть все</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Card;
