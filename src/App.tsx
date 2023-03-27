import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@atoms';
import { Login, Home, PageNotFound } from '@screens';
import './App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
