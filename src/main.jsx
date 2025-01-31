import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.scss'
import App from './App.jsx'
import { TextProvider } from './context/textContext.jsx';
import { DataProvider } from './context/dataContext.jsx';
import { CartProvider } from './context/cartContext.jsx';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <TextProvider>
          <App />
        </TextProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>
)
