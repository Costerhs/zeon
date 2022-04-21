import React from 'react';
import newe from './../News.module.css';

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
