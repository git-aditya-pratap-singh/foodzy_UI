import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux';
import store from './Components/Store/Store';
import {AuthProvider } from "./Components/Context/auth";


ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <Provider store={store}>
      <App />
    </Provider>
    </AuthProvider>
   
)

