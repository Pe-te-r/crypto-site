import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './api/store'
import { ToastProvider } from './context_fi/ToastContext'
import { LocalStorageProvider } from './context_fi/LocalStorageContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ToastProvider>
    <LocalStorageProvider>
      <App />
    </LocalStorageProvider>
    </ToastProvider>
    </Provider>
  </StrictMode>,
)
