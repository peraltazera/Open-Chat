import { useState, useContext, useRef } from 'react'
import { BiSend, BiImages, BiLocationPlus, BiHappy } from 'react-icons/bi'
import { updateDoc, doc, Timestamp, collection, addDoc, increment } from "firebase/firestore"
import { db } from "../../services/FireBaseConfigKey"
import Context from '../contexts/Context'
import Language from '../Language'
import { FooterStl, TextareaStl, InputStl } from './Footer.style'
import IconDisabled from '../styles/IconDisabled.style'
import Icon from '../styles/Icon.style'

function Footer() {

  const [message, setMessage] = useState("")
  const { myUser, chatUser, language, setTextareaHeight } = useContext(Context)

  const textAreaRef = useRef(null);

  const SendMSG = async () => { 
    textAreaRef.current.style.height = `20px`;
    const messageInput = message.replace(/^\s+/, "");
    setMessage("")
    if(messageInput.trim())
    {
      const Ref = doc(db, "Chats", chatUser.id)
      updateDoc(Ref, {
            message:
            {
              name: myUser.name,
              email: myUser.email,
              message: messageInput,
              photo: myUser.photo,
              messageDate: Timestamp.fromDate(new Date())
            },
            [myUser.email.replace(/[^a-zA-Z0-9]/g, "")]: increment(1)
      })
      await addDoc(collection(doc(db, "Chats", chatUser.id), "Messages"), {
        name: myUser.name,
        email: myUser.email,
        message: messageInput,
        photo: myUser.photo,
        messageDate: Timestamp.fromDate(new Date())
      })
    }
  }

  const handleKeyPress = (event) => {
    if(event.key == 'Enter' && !event.shiftKey)
    {
      event.preventDefault();
      SendMSG()
    }
  }

  const handleInput = (event) => {
    textAreaRef.current.style.height = `20px`;
    textAreaRef.current.style.height = event.target.scrollHeight < 138 ? `${event.target.scrollHeight}px` : "138px"
    textAreaRef.current.scrollTop = 0
    setTextareaHeight(textAreaRef.current.style.height)
  };

  return (
    <FooterStl>
        <InputStl>
          <TextareaStl ref={textAreaRef} name="postContent" value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => handleKeyPress(e)} 
          placeholder={Language[language].chat.footer.input} onInput={handleInput}/>
          <IconDisabled>
            <BiHappy size={22} />
          </IconDisabled>
          <IconDisabled>
            <BiImages size={22}/>
          </IconDisabled>
          <IconDisabled>
            <BiLocationPlus size={22}/>
          </IconDisabled>
          <Icon>
            <BiSend size={22} onClick={SendMSG}/>
          </Icon>
        </InputStl>
    </FooterStl>
  )
}

export default Footer

