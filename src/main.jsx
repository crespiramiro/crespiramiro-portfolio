import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { inject } from '@vercel/analytics/*'

createRoot(document.getElementById('root')).render(

  inject(),
  <StrictMode>
    <App />
  </StrictMode>,
)
