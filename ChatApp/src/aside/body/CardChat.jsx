import { useEffect, useContext } from 'react'
import './CardChat.css'
import img from '../../assets/Victor.png';
import { doc, addDoc, collection } from "firebase/firestore";
import Context from '../../contexts/Context';
import { db } from "../../../services/FireBaseConfigKey";

function CardChat(props) {

  const { myUser, setChat, chat } = useContext(Context)

  const CreateChat = async () => {
    console.log(myUser)
        await addDoc(collection(db, "Chats"), {
            user: [myUser.email,props.email],
            messages: []
        });
        // addDoc(doc(db, "Chats", myUser.email+props.email), {
        //     user: [myUser.email,props.email],
        //     messages: []
        // });
        setChat([myUser.email,props.email])
        console.log(chat)
  };

  return (
    <div className="CardChat" onClick={CreateChat}>
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