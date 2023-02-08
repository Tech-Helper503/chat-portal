import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'
import './index.css'

console.log('Soryy... firebase is broken')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain="dev-m80fluyc.us.auth0.com" clientId="iiJlA4qNJ6K9bvRhOHz4fgRGjjx7czAs" authorizationParams={{
      redirect_uri: window.location.origin
    }}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
