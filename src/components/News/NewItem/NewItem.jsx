import React from 'react';
import newe from './../News.module.css';

import fon1 from './../img/fon1.png';
import fon2 from './../img/fon2.png';
import fon3 from './../img/fon3.png';
import fon4 from './../img/fon4.png';
import fon5 from './../img/fon5.png';
const NewItem = ({ image, h, text }) => {
  return (
    <div className={newe.item}>
      <div className={newe.img}>
        <img src={image} alt="nice" />
      </div>
      <div className={newe.char}>
        <div className={newe.h}>{h}</div>
        <div className={newe.text}>{text}</div>
      </div>
    </div>
  );
};

export default NewItem;
