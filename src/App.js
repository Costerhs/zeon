import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Elect from './components/Elect/Elect';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Description from './components/Description/Description';
import Collection from './components/Collection/Collection';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Help from './components/Help/Help';
const App = () => {
  return (
    <div className="boss">
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/elect" element={<Elect />} />
        <Route path="/" element={<Main />} />
        <Route path="/desc" element={<Description />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/news" element={<News />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
