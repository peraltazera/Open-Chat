import { useContext, useEffect, useState } from 'react'
import './Body.css'
import Card from './CardChat'
import Context from '../../contexts/Context';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { query, collection, where, doc, getDocs } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";

function Body() {

  console.log("Body Aside")

  const [userList, setUserList] = useState([])
  const [chatId, setChatId] = useState([])
  const [emailList, setEmailList] = useState([])
  const { searchUser, myUser, setChats, chatUser } = useContext(Context)

  const chatsQuery = query(collection(db, "Chats"), where("user", "array-contains", myUser.email || ""));
  const userQuery = query(collection(db, "users"));

  const [chatsDoc] = useCollectionData(chatsQuery)

  const fetchData = async () => {
    const userDoc = await getDocs(userQuery)
    setUserList([])
    userDoc.forEach((doc) => {
      if(doc){
          emailList.map(user => {
          if(user.email == doc.data().email){
            setUserList(oldArray => [...oldArray, {data: doc.data(), id: user.id}])
          }
        } )
      }
    });
  }

  useEffect(() => {
    if(chatsDoc){
        setChats(chatsDoc)
        setEmailList(chatsDoc.map((chat) => {
          const user = chat.user.filter(user => user != myUser.email)
          return {email: user[0], id: chat.id }
        }))
    }
  }, [chatsDoc]);

  useEffect(() => {
    fetchData()
  }, [emailList]);

  if(searchUser)
  {
    return (
      <div className="Body">
          <Card num={0} name={searchUser.name} photo={searchUser.photo} status={"Online"} date={14} email={searchUser.email} />
      </div>
    )
  }

  if(userList){
      return (
      <div className="Body">
          {userList.map((user, id) => {
            let select = ""
            if(user.id == chatUser.id){
              select = "Select"
            }
            return <Card key={id} num={0} name={user.data.name} photo={user.data.photo} status={"Online"} date={14} email={user.data.email} idChat={user.id} select={select}/>
          } )}
      </div>
    )
  }
  
  return (
    <div className="Body">
        <p>User not found!</p>
    </div>
  )
}

export default Body
