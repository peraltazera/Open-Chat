import { useState, useContext } from 'react'
import './Footer.css'
import { BiSend, BiImages, BiLocationPlus, BiHappy } from 'react-icons/bi';
import { updateDoc, doc, arrayUnion, Timestamp, where, getDocs, collection, getDoc, query } from "firebase/firestore";
import { db } from "../../services/FireBaseConfigKey";
import Context from '../contexts/Context';

function Footer() {

  console.log("Footer Chat")

  const [message, setMessage] = useState("")
  const { myUser, chat, chatUser } = useContext(Context)

  const SendMSG = async () => { 
    const Ref = doc(db, "Chats", chatUser.id);
    updateDoc(Ref, {
        messages: arrayUnion(
          {
            name: myUser.name,
            email: myUser.email,
            message: message,
            photo: myUser.photo,
            messageDate: Timestamp.fromDate(new Date())
          }
        )
    });
    setMessage('')
  }

  return (
    <div className="Footer">
        <form></form>
        <div className="Input">
          <textarea name="postContent" value={message} onChange={(e) => setMessage(e.target.value)} rows={1} placeholder="Type a message..."/>
          <span className="SpanIcon"><BiHappy size={24}  className="Icon IconDisabled"/></span>
          <span className="SpanIcon"><BiImages size={24} className="Icon IconDisabled"/></span>
          <span className="SpanIcon"><BiLocationPlus size={24} className="Icon IconDisabled"/></span>
          <span className="SpanIcon"><BiSend size={24} className="Icon" onClick={SendMSG}/></span>
        </div>
    </div>
  )
}

export default Footer

