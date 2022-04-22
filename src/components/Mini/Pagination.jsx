import React from 'react';
import PagionationSearch from '../Search/PagionationSearch';
import mini from './Mini.module.css';
function Pagination({ forze, setPagi, touch, setTouch, pagi, pagin }) {
  return (
    <div className={mini.pagination}>
      <div
        className={mini.uper}
        onClick={() => {
          setPagi((el) => (el -= 1));
        }}></div>

      {Array(pagin)
        .fill(0)
        .slice(touch - 4, touch)
        .map((el, index) => {
          return (
            <PagionationSearch
              froze={forze.bind(this, index + 1)}
              active={pagi === index + 1 ? true : false}
              num={index + 1}
            />
          );
        })}
      {pagi > 4 && (
        <div
          onClick={() => {
            setTouch((el) => (el += 4));
          }}
          className={mini.toch}>
          <p className={mini.pagi_str}>...</p>
        </div>
      )}
      {pagi > 4 && (
        <div onClick={forze.bind(this, pagi)} className={mini.n}>
          <p className={mini.pagi_str}>{pagi}</p>
        </div>
      )}
      <div
        className={mini.downer}
        onClick={() => {
          setPagi((el) => (el += 1));
        }}></div>
    </div>
  );
}

export default Pagination;
