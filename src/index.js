import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Empreducers from './redux/Empreducers'

const store = configureStore({
  reducer: {
    employees: Empreducers,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
