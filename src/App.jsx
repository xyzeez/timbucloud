import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Components
import AppLayout from './components/AppLayout,';

// Pages
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
