import { useState, useContext } from 'react'
import './Footer.css'
import { BiSend, BiImages, BiLocationPlus, BiHappy } from 'react-icons/bi';
import { collection, addDoc, updateDoc, doc, arrayUnion, setDoc } from "firebase/firestore";
import { db } from "../../services/FireBaseConfigKey";
import Context from '../contexts/Context';

function Footer() {

  const [message, setMessage] = useState("")
  const { user } = useContext(Context)

  const SendMSG = () => { 
    const Ref = doc(db, "Chats", "Messages");
    updateDoc(Ref, {
        messages: arrayUnion(
          {
            user: user.email,
            message: message,
            date: new Date(),
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

