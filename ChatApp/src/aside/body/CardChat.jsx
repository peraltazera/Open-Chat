import { useContext } from 'react'
import './CardChat.css'
import img from '../../assets/Victor.png';
import { doc, setDoc } from "firebase/firestore";
import Context from '../../contexts/Context';
import { db } from "../../../services/FireBaseConfigKey";
import DivFlex from '../../styles/DivFlex.style';
import Image from '../../styles/Image.style';
import Text from '../../styles/Text.style';

function CardChat(props) {

  console.log("CardChat")

  const { myUser, setChatUser, chatUser, chats, setInputSearchUser, setInfo, setlimitMessages, setMaxMessages } = useContext(Context)

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
            message: {},
          });
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
  };

  return (
    <DivFlex width="376px" height="80px" padding="46px 20px" margin="8px 12px" alignItems="center" borderRadius="8px" backgroundColor="rgb(255, 255, 255,0.0)" className={`CardChat ${props.select}`} onClick={CreateChat}>
        <Image height="60px" borderRadius="100px" src={props.photo || img} alt="Logo" />
        <DivFlex flexDirection="column" gap="6px" padding="0px 14px">
          <DivFlex justifyContent="space-between">
            <Text>{props.name}</Text>
            <Text color="rgb(156, 156, 156)">{props.date}</Text>
          </DivFlex>
          <DivFlex justifyContent="space-between">
            <Text color="rgb(156, 156, 156)">{props.status}</Text>
            <Text className="Number">{props.num}</Text>
          </DivFlex>
        </DivFlex>
    </DivFlex>
  )
}

export default CardChat