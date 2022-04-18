import React from 'react';
import main from '../Main.module.css';
function Minidesc({ img, desc, head }) {
  return (
    <div className={main.end_item}>
      <div className={main.item_img}>
        <img src={img} alt="nice" />
      </div>
      <h2>{head}</h2>
      <p>{desc} </p>
    </div>
  );
}

export default Minidesc;
