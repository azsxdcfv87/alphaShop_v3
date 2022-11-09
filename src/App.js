import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ShopCart from './Pages/ShopCart';

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ShopCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

