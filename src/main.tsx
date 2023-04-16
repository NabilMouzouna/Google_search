import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { SearchContextProvider } from './context/GoogleAPIContext'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
