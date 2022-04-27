import React from 'react';
import main from '../Main.module.css';
function Minidesc({ img, desc, head }) {
  return (
    <div className={main.end_item}>
      <div className={main.item_img}>
        <img src={img} alt="nice" />
      </div>
      <h2 className={main.desc_hed}>{head}</h2>
      <p className={main.desc_t}>{desc} </p>
    </div>
  );
}

export default Minidesc;
