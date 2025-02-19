import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Home/MainPage.jsx';
import Login from './pages/Login/Login.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import {Products} from './pages/Products/Products.jsx';
import {Contact} from './pages/Contact/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import { Provider } from 'react-redux';
import { Builder } from './pages/Builder/Builder.jsx';
import store from './redux/store.js';
import Header from './pages/Home/header/Header.jsx';
import Footer from './pages/Home/Footer.jsx';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/*' element={<NotFound />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/admin' element={<Dashboard />}/>
            <Route path='/build-your-pc' element={<Builder />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/products' element={<Products />}/>
          </Routes>
          <Footer/>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
