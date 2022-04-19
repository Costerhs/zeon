import { Route, Routes } from 'react-router-dom';
import './App.css';
import Elect from './components/Elect/Elect';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Description from './components/Description/Description';
import Collection from './components/Collection/Collection';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setRandom } from './redux/reducers/cartReducer';
import { useEffect, useState } from 'react';
import Search from './components/Search/Search';
import Basket from './components/Basket/Basket';
import Product from './components/Product/Product';
import Similar from './components/Similar/Similar';
import Checkout from './components/Checkout/Checkout';
import Form from './Form.jsx/Form';

const App = () => {
  let flag = useSelector((state) => state.cart.formes);
  let dispatch = useDispatch();
  console.log('app');
  useEffect(() => {
    dispatch(setCart());
    dispatch(setRandom());
  }, []);
  return (
    <>
      <div className="boss">
        <Header />
        {/* <div className="btn_up">
        <img className="btn_img" src="https://i.ibb.co/4ZWdqNc/up.png" />
      </div> */}
        <Routes>
          <Route path="/cart" element={<Basket />} />
          <Route path="/elect" element={<Elect />} />
          <Route path="/" element={<Main />} />
          <Route path="/desc" element={<Description />} />
          <Route path="/collection*" element={<Collection />} />
          <Route exact path="/news" element={<News />} />
          <Route path="/help" element={<Help />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product" element={<Product />} />
          {/* <Route path="/similar" element={<Similar />} /> */}
          <Route path="/check" element={<Checkout />} />
          <Route path="/main" element={<Main />} />
        </Routes>
        <Footer />
        {/* <div className="test">
          <div className="fon"></div>
        </div> */}
        {flag === true ? (
          <>
            {' '}
            <div className="fon"></div>
            <div className="formes_cont">
              <Form />
            </div>{' '}
          </>
        ) : null}
      </div>
    </>
  );
};

export default App;
