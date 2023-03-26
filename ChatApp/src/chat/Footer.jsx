import { useState, useContext } from 'react'
import { BiSend, BiImages, BiLocationPlus, BiHappy } from 'react-icons/bi';
import { updateDoc, doc, Timestamp, collection, addDoc, increment } from "firebase/firestore";
import { db } from "../../services/FireBaseConfigKey";
import Context from '../contexts/Context';
import Language from '../Language';
import { FooterStl, TextareaStl, InputStl } from './Footer.style';
import IconDisabled from '../styles/IconDisabled.style';
import Icon from '../styles/Icon.style';

function Footer() {

  console.log("Footer Chat")

  const [message, setMessage] = useState("")
  const { myUser, chatUser, language } = useContext(Context)

  const SendMSG = async () => { 
    if(message.trim())
    {
      await addDoc(collection(doc(db, "Chats", chatUser.id), "Messages"), {
        name: myUser.name,
        email: myUser.email,
        message: message,
        photo: myUser.photo,
        messageDate: Timestamp.fromDate(new Date())
      });
      const Ref = doc(db, "Chats", chatUser.id)
      updateDoc(Ref, {
            message:
            {
              name: myUser.name,
              email: myUser.email,
              message: message,
              photo: myUser.photo,
              messageDate: Timestamp.fromDate(new Date())
            },
            [myUser.email.replace(/[^a-zA-Z0-9]/g, "")]: increment(1)
      });
    }
    setMessage('')
  }

  return (
    <FooterStl>
        <InputStl>
          <TextareaStl name="postContent" value={message} onChange={(e) => setMessage(e.target.value)} rows={1} placeholder={Language[language].chat.footer.input}/>
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

