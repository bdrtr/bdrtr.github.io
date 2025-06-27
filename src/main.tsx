
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './css/styles.css'
import './js/scripts.js'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('main-root')!).render(
  <>
    <App />
  </>
)
