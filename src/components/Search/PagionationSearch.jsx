import React from 'react';
import sear from '../Mini/Mini.module.css';
function PagionationSearch({ num, active, froze }) {
  return (
    <div onClick={froze} className={active === true ? sear.numbers : sear.number}>
      {' '}
      <p className={sear.pagi_str}>{num}</p>
    </div>
  );
}

export default PagionationSearch;
