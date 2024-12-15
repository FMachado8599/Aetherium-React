import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Home/MainPage';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

function App() {

  return (
    <div>
      <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route path='/*' element={<NotFound />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/' element={<MainPage />}/>
          <Route path='/admin' element={<Dashboard />}/>
        </Routes>
        </ApiProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
