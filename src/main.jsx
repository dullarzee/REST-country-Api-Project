import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind/App.css'
import App from './App.jsx'

/*const a = document.createElement('a');
a.style.display = 'none';
a.id = 'scrollUp';
a.href = '#';
const body = document.querySelector('body');
body.appendChild(a);

document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 98%)';*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
