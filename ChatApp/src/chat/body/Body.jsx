import { useEffect, useRef, useState, useContext } from 'react'
import './Body.css'
import Message from './Message'
import Date from './Date'
import { collection, onSnapshot, doc, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Context from '../../contexts/Context';

function Body() {

  const [messages, setMessages] = useState("")
  const { chat } = useContext(Context)
  const refBody = useRef(null)

  const messageRef = doc(db, "Chats", chat || "Messages")
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

  if(messages == [])
  {
    return (
      <div className="Body" ref={refBody}>
          <Date text="March 4, 2023"/>
      </div>
    )
  }

  return (
    <div className="Body" ref={refBody}>
        <Date text="March 4, 2023"/>
        { messages.map((msg, id) => <Message key={id} msg={msg.message} email={msg.email} name={msg.name} photo={msg.photo} date={msg.messageDate}/>) }
    </div>
  )

}

export default Body
