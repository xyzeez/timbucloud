import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

// Components
import AppLayout from './components/AppLayout,';

const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route index element={<Navigate replace />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
