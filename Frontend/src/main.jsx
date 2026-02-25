import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <AuthContext>
      <div className="dark:bg-gray-900 dark:text-white">
        <App />
      </div>
    </AuthContext>

    
  </BrowserRouter >
)
