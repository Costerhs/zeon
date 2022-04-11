import React from 'react';
import newe from './News.module.css';

import NewItem from './NewItem/NewItem';
import { useSelector } from 'react-redux';

function News() {
  const item = useSelector((state) => state.news.item);

  return (
    <div className={newe.boss}>
      <h1 className={newe.newT}>Новости</h1>
      {item.map((el, index) => {
        return <NewItem key={index} image={el.image} h={el.h} text={el.text} />;
      })}
    </div>
  );
}

export default News;
