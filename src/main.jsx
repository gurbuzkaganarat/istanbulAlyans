import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // 👈 HelmetProvider ekledik
import './styles/index.css';
import App from './App.jsx';
import './i18n';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
