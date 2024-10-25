import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './api/store'
import { ToastProvider } from './context_fi/ToastContext'
import { LocalStorageProvider } from './context_fi/LocalStorageContext'
import { AuthProvider } from './components/ProtectedRoute'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalStorageProvider>
    <Provider store={store}>
    <AuthProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
    </AuthProvider>
    </Provider>
    </LocalStorageProvider>
  </StrictMode>,
)
