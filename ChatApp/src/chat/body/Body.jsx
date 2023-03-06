import { useEffect, useRef, useState } from 'react'
import './Body.css'
import Message from './Message'
import Date from './Date'
import { collection, onSnapshot, doc, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import { useDocumentData } from 'react-firebase-hooks/firestore';

function Body() {

  const [messages, setMessages] = useState([])
  const refBody = useRef(null)

  const messageRef = doc(db, "Chats", "Messages")
  const [messagesDoc] = useDocumentData(messageRef)

  useEffect(() => {
    if(messagesDoc)
    setMessages(messagesDoc.messages)
  }, [messagesDoc]);

  useEffect (() => {
    if(refBody.current.scrollHeight > refBody.current.offsetHeight){
      refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight
    }
  }, [messages])

  return (
    <div className="Body" ref={refBody}>
        <Date text="March 4, 2023"/>
        {messages.map((msg, id) => <Message key={id} msg={msg.message} author={msg.user}/>)}
    </div>
  )
}

export default Body
