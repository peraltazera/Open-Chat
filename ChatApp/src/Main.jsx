import React from 'react'
import ReactDOM from 'react-dom/client'
import Chat from './chat/Chat'
import Aside from './aside/Aside'
import './Main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Aside />
    <Chat />
  </React.StrictMode>,
)
