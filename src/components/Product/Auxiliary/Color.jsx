import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../../../redux/reducers/cartReducer';
import prod from '../Product.module.css';

function Color({ styles, num, id }) {
  let dispatch = useDispatch();
  const changeColors = () => {
    dispatch(changeColor(id, num));
  };

  return (
    <div className={prod.colorItem} onClick={changeColors}>
      <div className={classNames(prod.opac)} style={styles}></div>
    </div>
  );
}

export default Color;
