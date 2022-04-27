import classNames from 'classnames';
import React, { useState } from 'react';

function HelpItem({ hes, text }) {
  let [anim, setAnim] = useState(false);

  return (
    <div
      className={classNames('items', {
        chan: anim === true,
      })} onClick={() => {
        setAnim((el) => !el);
      }}>
      <div className="itemes">
        <h1 className="hes">{hes}</h1>
        <p className="pes">{text}</p>
      </div>
      <img

        src="https://i.ibb.co/wccHN5T/Vector-17.png"
        className={classNames('strel', {
          rost: anim == true,
        })}
      />
    </div>
  );
}

export default HelpItem;
