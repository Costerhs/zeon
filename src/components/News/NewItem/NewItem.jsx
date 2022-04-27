import classNames from 'classnames';
import React, { useState } from 'react';
import newe from './../News.module.css';

const NewItem = ({ image, h, text }) => {
  const [full, setFull] = useState(false)
  return (
    <div className={classNames(newe.item, full && newe.fl)}>
      <div className={newe.img}>
        <img src={image} alt="nice" className={newe.imag} />
      </div>
      <div className={classNames(newe.char, full && newe.full)}>
        <div className={newe.h}>{h}</div>
        <div className={newe.text}>{text}

        </div>

      </div>

      {/* {full === false ? <div className={newe.cont_btn}><button className={newe.btn} onClick={() => setFull(true)}>Показать полностью</button></div> :
        <div className={newe.cont_btn}><button className={newe.btn} onClick={() => setFull(false)}>Скрыть</button></div>
      } */}
    </div>
  );
};

export default NewItem;
