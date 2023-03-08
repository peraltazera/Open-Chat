import { useContext } from 'react'
import './Chat.css'
import Header from './Header'
import Body from './body/Body'
import Footer from './Footer'
import Context from '../contexts/Context';

function Chat(props) {

  console.log("Chat")

  const { chatUser } = useContext(Context)

  if(chatUser.id){
    return (
      <div className="Chat">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }

  return (
    <div className="Initial">
      <h1>Open.Chat</h1>
      <p>Um chat integrado com o sistema de email do google</p>
    </div>
  )
}

export default Chat
