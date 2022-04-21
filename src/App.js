import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCart, setRandom } from './redux/reducers/cartReducer';
import { useEffect, useState } from 'react';

import Elect from './components/Elect/Elect';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Description from './components/Description/Description';
import Collection from './components/Collection/Collection';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';
import Search from './components/Search/Search';
import Basket from './components/Basket/Basket';
import Product from './components/Product/Product';
import Checkout from './components/Checkout/Checkout';
import Form from './Form.jsx/Form';
import PublicOfer from './components/PublicOfer/PublicOfer';
import Windower from './components/Windower/Windower';
import Telephones from './components/Mini/Telephones';

const App = () => {
  let flag = useSelector((state) => state.cart.formes);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart());
    dispatch(setRandom());
  }, []);
  return (
    <>
      <div className="boss">
        <Header />

        <Routes>
          <Route path="/cart" element={<Basket />} />
          <Route path=":as/:as/:as/cart" element={<Basket />} />
          <Route path=":as/:as/cart" element={<Basket />} />
          <Route path=":as/cart" element={<Basket />} />
          <Route path="/elect" element={<Elect />} />
          <Route path="/" element={<Main />} />
          <Route path="/desc" element={<Description />} />
          <Route path="/collection/*" element={<Collection />} />
          <Route path="/news" element={<News />} />
          <Route path="/help" element={<Help />} />
          <Route path="/search" element={<Search />} />
          <Route path=":id/:statusId/product/*" element={<Product />} />
          <Route path=":id/product/*" element={<Product />} />
          <Route path="/product/*" element={<Product />} />
          {/* <Route path="/similar" element={<Similar />} /> */}
          <Route path="/check" element={<Checkout />} />
          <Route path="/main" element={<Main />} />
          <Route path="/public" element={<PublicOfer />} />
        </Routes>
        <Footer />
        {flag === 1 ? (
          <>
            {' '}
            <div className="fon"></div>
            <div className="formes_cont">
              <Form />
            </div>{' '}
          </>
        ) : null}
        {flag === 2 ? (
          <>
            {' '}
            <div className="fon"></div>
            <div className="tele_cont">
              <Telephones />
            </div>{' '}
          </>
        ) : (
          <Windower />
        )}
      </div>
    </>
  );
};

export default App;
