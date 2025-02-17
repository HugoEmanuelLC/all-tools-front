import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Components
import App from './App.jsx'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
    }}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
