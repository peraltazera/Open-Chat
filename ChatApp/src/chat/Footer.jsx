import { useState, useContext } from 'react'
import { BiSend, BiImages, BiLocationPlus, BiHappy } from 'react-icons/bi';
import { updateDoc, doc, Timestamp, collection, addDoc } from "firebase/firestore";
import { db } from "../../services/FireBaseConfigKey";
import Context from '../contexts/Context';
import Language from '../Language';
import { FooterStl, TextareaStl, InputStl } from './Footer.style';

function Footer() {

  console.log("Footer Chat")

  const [message, setMessage] = useState("")
  const { myUser, chatUser, language } = useContext(Context)

  const SendMSG = async () => { 
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
          }
    });
    setMessage('')
  }

  return (
    <FooterStl>
        <InputStl>
          <TextareaStl name="postContent" value={message} onChange={(e) => setMessage(e.target.value)} rows={1} placeholder={Language[language].chat.footer.input}/>
          <BiHappy size={26}  className="Icon IconDisabled"/>
          <BiImages size={26} className="Icon IconDisabled"/>
          <BiLocationPlus size={26} className="Icon IconDisabled"/>
          <BiSend size={26} className="Icon" onClick={SendMSG}/>
        </InputStl>
    </FooterStl>
  )
}

export default Footer

