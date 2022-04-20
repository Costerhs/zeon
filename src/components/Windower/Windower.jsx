import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../../redux/reducers/cartReducer';

function Windower() {
  const [chat, setChat] = useState(false);
  const scrollw = () => {
    window.scroll(0, 0);
  };
  let dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleForm(2));
  };
  return (
    <div className="plav">
      <div className="uper" onClick={scrollw}>
        <img src="https://i.ibb.co/M9sZQz3/Vector-19.pngs" />
      </div>
      <div className="chat">
        {' '}
        {chat === false ? (
          <img
            src="https://i.ibb.co/wsGjb1t/Chat-1.png"
            onClick={() => {
              setChat(true);
            }}
          />
        ) : (
          <div className="cont_tele">
            <div className="tel_element">
              {' '}
              <a href="https://web.telegram.org/z/">
                <img src="https://i.ibb.co/9g711x7/telegram.png" />{' '}
              </a>
            </div>
            <div className="tel_element">
              {' '}
              <a href="https://web.whatsapp.com/">
                <img src="https://i.ibb.co/ThBZS6q/whatsapp.png" />{' '}
              </a>
            </div>
            <div className="tel_element">
              {' '}
              <img src="https://i.ibb.co/2grxQNJ/telephone.png" onClick={toggle} />{' '}
            </div>
            <div className="tel_elements">
              {' '}
              <img
                className="iks"
                src="https://i.ibb.co/g6ngk7J/Vector-18.png"
                onClick={() => {
                  setChat(false);
                }}
              />{' '}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Windower;
