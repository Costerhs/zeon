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
import { useDispatch } from 'react-redux';
import { setCart } from './redux/reducers/cartReducer';
import { useEffect } from 'react';
import Search from './components/Search/Search';
import Basket from './components/Basket/Basket';

const App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCart());
  }, []);
  return (
    <div className="boss">
      <Header />
      <Routes>
        <Route path="/cart" element={<Basket />} />
        <Route path="/elect" element={<Elect />} />
        <Route path="/" element={<Main />} />
        <Route path="/desc" element={<Description />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/news" element={<News />} />
        <Route path="/help" element={<Help />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
