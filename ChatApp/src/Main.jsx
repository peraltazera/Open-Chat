import React from 'react'
import ReactDOM from 'react-dom/client'
import Chat from './chat/Chat'
import Aside from './aside/Aside'
import Login from './Login'
import './Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
