import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Redux/Store.jsx'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </Provider>
)
