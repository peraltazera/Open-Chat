import { useEffect, useRef, useContext, useState } from 'react'
import './Body.css'
import Message from './Message'
import Date from './Date'
import { collection, query, where, limit, collectionGroup, doc, orderBy, getCountFromServer } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Context from '../../contexts/Context';

function Body() {

  console.log("Body Chat")

  const { chatUser, messages, setMessages, limitMessages, setlimitMessages, changeLimitMessages, setChangeLimitMessages, maxMessages, setMaxMessages } = useContext(Context)
  const refBody = useRef(null)

  const chatsQuery = query(collection(doc(db, "Chats", chatUser.id), "Messages"), orderBy("messageDate", "desc"), limit(limitMessages));
  const [messagesDoc] = useCollectionData(chatsQuery)

  const CreateChat = async () => { 
    const coll = collection(doc(db, "Chats", chatUser.id), "Messages");
    const snapshot = await getCountFromServer(coll);
    setMaxMessages(snapshot.data().count)
  }

  useEffect(() => { 
    if(messagesDoc)
    {
      if(messagesDoc.length > 0){
        setMessages(messagesDoc.reverse())
      }
      else{
        setMessages([])
      }
    }
  }, [messagesDoc]);

  useEffect (() => {
    console.log(changeLimitMessages)
    if(changeLimitMessages){
      setChangeLimitMessages(false)
    }
    else if(refBody.current.scrollHeight > refBody.current.offsetHeight){
      refBody.current.scrollTop = refBody.current.scrollHeight - refBody.current.offsetHeight
    }
    if(!changeLimitMessages)
    {
      CreateChat()
    }
  }, [messages])

  const MaisMsg = () => {
    CreateChat()
    setChangeLimitMessages(true)
    setlimitMessages(limitMessages+100)
  }

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
        {maxMessages > limitMessages ? <button onClick={MaisMsg}>More messages</button> : null}
        <Date text="March 4, 2023"/>
        { messages.map((msg, id) => <Message key={id} msg={msg.message} email={msg.email} emailPre={id == 0 ? "" : messages[id - 1].email} name={msg.name} photo={msg.photo} date={msg.messageDate}/>) }
    </div>
  )

}

export default Body
