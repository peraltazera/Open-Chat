import { useEffect, useContext } from 'react'
import './CardChat.css'
import img from '../../assets/Victor.png';
import { doc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import Context from '../../contexts/Context';
import { db } from "../../../services/FireBaseConfigKey";

function CardChat(props) {

  console.log("CardChat")

  const { myUser, setChatUser, chat, chats, setChatId, setInputSearchUser } = useContext(Context)

  const CreateChat = async () => {    
        let createChat = true  
        chats.forEach(chat => {
          chat.user.forEach(user => {
            if(props.email == user){
              createChat = false
            }
          })
        });
        if(createChat){
          const id = myUser.email+props.email
          await setDoc(doc(db, "Chats", id), {
            id: id,
            user: [myUser.email,props.email],
            messages: []
          });
          setChatUser({
            photo: props.photo,
            name: props.name,
            email: props.email,
            id: id
          })
        }else{
          setChatUser({
            photo: props.photo,
            name: props.name,
            email: props.email,
            id: props.idChat
          })
        }
        setInputSearchUser("")
  };

  return (
    <div className={`CardChat ${props.select}`} onClick={CreateChat}>
        <img src={props.photo || img} alt="Logo" />
        <div className="Info">
          <span className="Top">
            <p>{props.name}</p>
            <p className="Date">{props.date}</p>
          </span>
          <span className="Bottom">
            <p className="Date">{props.status}</p>
            <p className="Number">{props.num}</p>
          </span>
        </div>
    </div>
  )
}

export default CardChat