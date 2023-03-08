import { useEffect, useRef, useState, useContext } from 'react'
import './Body.css'
import Message from './Message'
import Date from './Date'
import { collection, onSnapshot, doc, query, orderBy, where } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore';
import Context from '../../contexts/Context';

function Body() {

  console.log("Body Chat")

  const { chatUser, chats, myUser, messages, setMessages } = useContext(Context)
  const refBody = useRef(null)

  const chatsQuery = query(collection(db, "Chats"), where("id", "==", chatUser.id || ""));
  const [messagesDoc] = useCollectionData(chatsQuery)

  useEffect(() => {
    if(messagesDoc)
    {
      if(messagesDoc.length > 0){
        setMessages(messagesDoc[0].messages)
      }
    }
  }, [messagesDoc]);

   useEffect (() => {
    if(refBody.current.scrollHeight > refBody.current.offsetHeight){
      refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight
    }
  }, [messages])

  if(messages == [] || !messages)
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
