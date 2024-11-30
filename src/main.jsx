import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserDataProvider from './context/UserDataContext.jsx'
import CountryProvider from './context/CountryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserDataProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </UserDataProvider>
  </StrictMode>,
)
