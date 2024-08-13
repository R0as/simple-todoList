import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='w-full h-screen bg-gray-800'><App /></div>
  </StrictMode>,
)
