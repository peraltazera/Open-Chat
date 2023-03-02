import { useState } from 'react'
import './Chat.css'
import Header from './Header'
import Body from './body/Body'
import Footer from './Footer'

function Chat() {
  return (
    <div className="Chat">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Chat
