import React from 'react';
import { useSelector } from 'react-redux';
import bas from './Basket.module.css';
import BasItem from './Item/BasItem';
import Total from './Item/Total';
function Basket() {
  let allProduct = useSelector((el) => el.cart.basket);
  let fullPrice = Object.keys(allProduct)
    .map((el) => {
      return allProduct[el].elem.price * allProduct[el].totalCount;
    })
    .reduce((el, sus) => el + sus, 0);

  let productArr = Object.keys(allProduct).map((el) => {
    return allProduct[el].elem;
  });
  let totalCountAll = Object.keys(allProduct)
    .map((el) => {
      return allProduct[el].totalCount;
    })
    .reduce((el, sus) => el + sus, 0);
  return (
    <div className={bas.boss}>
      <div className={bas.items}>
        {productArr.map((el) => {
          return <BasItem key={el.id} el={el} />;
        })}
      </div>
      <Total price={fullPrice} allProduct={totalCountAll} line={productArr.length} />
    </div>
  );
}

export default Basket;
/* <div className={bas.boss}>
      <div className={bas.items}>
        <div className={bas.item}>
          <img src="img/new1.png" alt="nice" className={bas.img} />
          <div>
            <p className={bas.h}>Вечернее платье</p>
            <p className={bas.h2}>Размер: 42-50</p>
            <div className={bas.colores}>
              <div className={bas.contP}>
                <p className={bas.p}>Цвет:</p>
              </div>
              <div className={bas.contCircle}>
                {' '}
                <div className={bas.circle}></div>
              </div>
            </div>{' '}
        
            <h1 className={bas.price}>1 365 р</h1>
            <div className={bas.contBtn}>
              <button className={bas.btn}>-</button>
              <p className={bas.count}>1</p>
              <button className={bas.btn}>+</button>
            </div>
          </div>
          <div className={bas.x}>
            <img src="img/x.png" alt="nice" className={bas.xImg} />
          </div>{' '}
        </div>
     
        <div className={bas.item}>
          <img src="img/hit2.png" alt="nice" className={bas.img} />
          <div>
            <p className={bas.h}>Вечернее платье</p>
            <p className={bas.h2}>Размер: 42-50</p>
            <div className={bas.colores}>
              <div className={bas.contP}>
                <p className={bas.p}>Цвет:</p>
              </div>
              <div className={bas.contCircle}>
                {' '}
                <div className={bas.circle}></div>
              </div>
            </div>{' '}
       
            <h1 className={bas.price}>1 365 р</h1>
            <div className={bas.contBtn}>
              <button className={bas.btn}>-</button>
              <p className={bas.count}>1</p>
              <button className={bas.btn}>+</button>
            </div>
          </div>
          <div className={bas.x}>
            <img src="img/x.png" alt="nice" className={bas.xImg} />
          </div>
        </div>

        <div className={bas.item}>
          <img src="img/hit1.png" alt="nice" className={bas.img} />
          <div>
            <p className={bas.h}>Вечернее платье</p>
            <p className={bas.h2}>Размер: 42-50</p>
            <div className={bas.colores}>
              <div className={bas.contP}>
                <p className={bas.p}>Цвет:</p>
              </div>
              <div className={bas.contCircle}>
                {' '}
                <div className={bas.circle}></div>
              </div>
            </div>{' '}
         
            <h1 className={bas.price}>1 365 р</h1>
            <div className={bas.contBtn}>
              <button className={bas.btn}>-</button>
              <p className={bas.count}>1</p>
              <button className={bas.btn}>+</button>
            </div>
          </div>
          <div className={bas.x}>
            <img src="img/x.png" alt="nice" className={bas.xImg} />
          </div>{' '}
        </div>
    
        <div className={bas.item}>
          <img src="img/new2.png" alt="nice" className={bas.img} />
          <div>
            <p className={bas.h}>Вечернее платье</p>
            <p className={bas.h2}>Размер: 42-50</p>
            <div className={bas.colores}>
              <div className={bas.contP}>
                <p className={bas.p}>Цвет:</p>
              </div>
              <div className={bas.contCircle}>
                {' '}
                <div className={bas.circle}></div>
              </div>
            </div>{' '}
        
            <h1 className={bas.price}>1 365 р</h1>
            <div className={bas.contBtn}>
              <button className={bas.btn}>-</button>
              <p className={bas.count}>1</p>
              <button className={bas.btn}>+</button>
            </div>
          </div>
          <div className={bas.x}>
            <img src="img/x.png" alt="nice" className={bas.xImg} />
          </div>{' '}
        </div>
        
      </div>
      <div className={bas.itog}>
        <div className={bas.contDesc}>
          <h4>Сумма заказа</h4>
          <div className={bas.desc}>
            <p className={bas.left}>Количество линеек:</p>
            <p className={bas.right}>4 шт</p>
          </div>
          <div className={bas.desc}>
            <p className={bas.left}>Количество товаров:</p>
            <p className={bas.right}>20 шт</p>
          </div>
          <div className={bas.desc}>
            <p className={bas.left}>Стоимость:</p>
            <p className={bas.right}>6 825 рублей</p>
          </div>
          <div className={bas.desc}>
            <p className={bas.left}>Скидка:</p>
            <p className={bas.right}>125 рублей</p>
          </div>
          <div className={bas.dotted}></div>
          <div className={bas.desc}>
            <p className={bas.left}>Итого к оплате:</p>
            <p className={bas.right}>6 700 рублей</p>
          </div>
          <div className={bas.contEnd}>
            <button className={bas.end}>Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>*/
/*<div className={bas.itog}>
        <div className={bas.contDesc}>
          <h4>Сумма заказа</h4>
          <div className={bas.desc}>
            <p className={bas.left}>Количество линеек:</p>
            <p className={bas.right}>4 шт</p>
          </div>
          <div className={bas.desc}>
            <p className={bas.left}>Количество товаров:</p>
            <p className={bas.right}>20 шт</p>
          </div>
          <div className={bas.desc}>
            <p className={bas.left}>Стоимость:</p>
            <p className={bas.right}>6 825 рублей</p>
          </div>
          <div className={bas.desc}>
            <p className={bas.left}>Скидка:</p>
            <p className={bas.right}>125 рублей</p>
          </div>
          <div className={bas.dotted}></div>
          <div className={bas.desc}>
            <p className={bas.left}>Итого к оплате:</p>
            <p className={bas.right}>6 700 рублей</p>
          </div>
          <div className={bas.contEnd}>
            <button className={bas.end}>Оформить заказ</button>
          </div>
        </div>
      </div>*/
