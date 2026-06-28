import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: '#2B2118',
          color: '#FBF8F2',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '14px',
        },
      }}
    />
  </StrictMode>,
)
