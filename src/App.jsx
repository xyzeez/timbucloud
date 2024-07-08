import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Components
import AppLayout from './components/AppLayout,';

// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
