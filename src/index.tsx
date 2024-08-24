import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { HashRouter } from 'react-router-dom'
import {LanguageProvider} from './context/Context'
const rootElement = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootElement)

root.render(
  <HashRouter>
    <LanguageProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </LanguageProvider>
  </HashRouter>
)
