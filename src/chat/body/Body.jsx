import { useEffect, useRef, useContext } from 'react'
import Message from './message/Message'
import Date from './message/Date'
import { collection, query, updateDoc, limit, doc, orderBy, getCountFromServer } from "firebase/firestore"
import { db } from "../../../services/FireBaseConfigKey"
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Context from '../../contexts/Context'
import {BodyStl, ButtonStl} from './Body.style'
import Language from '../../Language'

function Body() {

  const { chatUser, messages, setMessages, limitMessages, setlimitMessages, changeLimitMessages, setChangeLimitMessages, 
    maxMessages, setMaxMessages, language, textareaHeight } = useContext(Context)
  const refBody = useRef(null)

  const chatsQuery = query(collection(doc(db, "Chats", chatUser.id), "Messages"), orderBy("messageDate", "desc"), limit(limitMessages))
  const [messagesDoc] = useCollectionData(chatsQuery)

  const CreateChat = async () => { 
    const coll = collection(doc(db, "Chats", chatUser.id), "Messages")
    const snapshot = await getCountFromServer(coll)
    setMaxMessages(snapshot.data().count)
  }

  useEffect(() => { 
    if(messagesDoc)
    {
      if(messagesDoc.length > 0){
        setMessages(messagesDoc.reverse())
        const Ref = doc(db, "Chats", chatUser.id)
        updateDoc(Ref, {
            [chatUser.email.replace(/[^a-zA-Z0-9]/g, "")]: 0
        })
      }
      else{
        setMessages([])
      }
    }
  }, [messagesDoc])

  useEffect (() => {
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
  }, [messages, textareaHeight])

  const MoreMessages = () => {
    CreateChat()
    setChangeLimitMessages(true)
    setlimitMessages(limitMessages+100)
  }

  const formatHours = date => {
    if(date)
    {
      let hours = ""
      let minutes = ""
      if(date.toDate().getHours().toString().length < 2)
      {
        hours = "0"+date.toDate().getHours().toString()
      }
      else
      {
        hours = date.toDate().getHours().toString()
      }
      if(date.toDate().getMinutes().toString().length < 2)
      {
        minutes = "0"+date.toDate().getMinutes().toString()
      }
      else
      {
        minutes = date.toDate().getMinutes().toString()
      }
      return `${hours}:${minutes}`
    }
    return ""
  }

  if(messages == [] || !messages)
  {
    return (
      <BodyStl ref={refBody}>
          <Date text="March 4, 2023"/>
      </BodyStl>
    )
  }

  return (
    <BodyStl ref={refBody}>
        {maxMessages > limitMessages ? <ButtonStl onClick={MoreMessages}>More messages</ButtonStl> : null}
        {messages[0] ? <Date text= {`${Language[language].chat.body.month[messages[0].messageDate.toDate().getMonth()]} ${messages[0].messageDate.toDate().getDate()}, 
        ${messages[0].messageDate.toDate().getFullYear()}`}/> : null}
        { messages.map((msg, id) => {
          return <Message key={id} msg={msg.message} email={msg.email} emailPre={id == 0 ? "" : messages[id - 1].email} name={msg.name} photo={msg.photo} date={msg.messageDate} 
          lastDate={messages[id != 0 ? id-1 : 0].messageDate} formatHours={formatHours}/>
        }      
        )}
    </BodyStl>
  )

}

export default Body
