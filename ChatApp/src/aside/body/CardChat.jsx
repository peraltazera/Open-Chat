import { useContext } from 'react'
import img from '../../assets/Victor.png'
import { BsCheckAll } from 'react-icons/bs'
import { doc, setDoc, Timestamp } from "firebase/firestore"
import Context from '../../contexts/Context'
import { db } from "../../../services/FireBaseConfigKey"
import {CardChatStl, InfoStl, InfoContainerStl, ImageStl, NumberStl, DateStl, NameStl, MessageStl, IconCheckStl, IconNoCheckStl, CardChatSelectStl} from './CardChat.style'

function CardChat(props) {

  const { myUser, setChatUser, chatUser, chats, setInputSearchUser, setInfo, setlimitMessages } = useContext(Context)

  const CreateChat = async () => {    
        let createChat = true  
        chats.forEach(chat => {
          chat.user.forEach(user => {
            if(props.email == user){
              createChat = false
            }
          })
        })
        if(createChat){
          const id = myUser.email+props.email
          await setDoc(doc(db, "Chats", id), {
            id: id,
            user: [myUser.email,props.email],
            message: {
              name: "",
              email: "",
              message: "Start Chat",
              photo: "",
              messageDate: Timestamp.fromDate(new Date())
            },
            [myUser.email.replace(/[^a-zA-Z0-9]/g, "")]: 0,
            [props.email.replace(/[^a-zA-Z0-9]/g, "")]: 0
          })
          setChatUser({
            photo: props.photo,
            name: props.name,
            email: props.email,
            id: id
          })
        }else if(props.idChat != chatUser.id){
          setChatUser({
            photo: props.photo,
            name: props.name,
            email: props.email,
            id: props.idChat
          })
          setlimitMessages(100)
        }
        setInfo(false)
        setInputSearchUser("")
  }
  
  if(props.date)
  {
    if(props.select)
    {
      return (
        <CardChatSelectStl onClick={CreateChat}>
          <ImageStl src={props.photo || img} alt="Logo" />
          <InfoStl >
            <InfoContainerStl>
              <NameStl>{props.name}</NameStl>
              <DateStl color="rgb(156, 156, 156)">{props.date}</DateStl>
            </InfoContainerStl>
            <InfoContainerStl>
              <MessageStl>{props.status}</MessageStl>
              {
                props.otherNumber 
                ? <NumberStl>{props.otherNumber}</NumberStl> 
                : props.myNumber
                ? <IconNoCheckStl><BsCheckAll size={24} /></IconNoCheckStl>
                : <IconCheckStl><BsCheckAll size={24} /></IconCheckStl>
              }
            </InfoContainerStl>
          </InfoStl>
        </CardChatSelectStl>
      )
    }
    else
    {
      return (
        <CardChatStl onClick={CreateChat}>
          <ImageStl src={props.photo || img} alt="Logo" />
          <InfoStl >
            <InfoContainerStl>
              <NameStl>{props.name}</NameStl>
              <DateStl>{props.date}</DateStl>
            </InfoContainerStl>
            <InfoContainerStl>
              <MessageStl>{props.status}</MessageStl>
              {
                props.otherNumber 
                ? <NumberStl>{props.otherNumber}</NumberStl> 
                : props.myNumber
                ? <IconNoCheckStl><BsCheckAll size={24} /></IconNoCheckStl>
                : <IconCheckStl><BsCheckAll size={24} /></IconCheckStl>
              }
            </InfoContainerStl>
          </InfoStl>
        </CardChatStl>
      )
    }

  }
  else
  {
    return (
      <CardChatStl onClick={CreateChat}>
          <ImageStl src={props.photo || img} alt="Logo" />
          <InfoStl>
            <InfoContainerStl>
              <NameStl>{props.name}</NameStl>
            </InfoContainerStl>
            <InfoContainerStl>
              <MessageStl>{props.status}</MessageStl>
            </InfoContainerStl>
          </InfoStl>
      </CardChatStl>
    )
  }
}

export default CardChat