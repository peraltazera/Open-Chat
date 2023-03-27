import { useContext } from 'react'
// import './Chat.css'
import Header from './Header'
import Body from './body/Body'
import Footer from './Footer'
import Context from '../contexts/Context';
import Language from '../Language';
import {ChatStl, InitialStl, TextStl, TitleStl} from './Chat.style';

function Chat() {

  const { chatUser, language } = useContext(Context)

  if(chatUser.id){
    return (
      <ChatStl className='Chat'>
        <Header />
        <Body />
        <Footer />
      </ChatStl>
    )
  }
  else
  {
    return (
      <InitialStl>
        <TitleStl >Open.Chat</TitleStl>
        <TextStl >{Language[language].chat.body.desc}</TextStl>
      </InitialStl>
    )
  }
}

export default Chat
