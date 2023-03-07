import { useContext, useEffect, useState } from 'react'
import './Body.css'
import Card from './CardChat'
import Context from '../../contexts/Context';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { query, collection, where, doc, getDocs } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";

const cards = [
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  {author: "Victor", status: "Thanks!", date: "15:20 PM", num: "2"},
  ]

function Body() {

  const [userList, setUserList] = useState([])
  const { searchUser, myUser } = useContext(Context)

  const chatsQuery = query(collection(db, "Chats"), where("user", "array-contains", myUser.email || ""));
  const [chatsDoc] = useCollectionData(chatsQuery)

  useEffect(() => {
    if(chatsDoc){
      setUserList([])
      const listChat = chatsDoc.map((chat) => {
        const user = chat.user.filter(user => user != myUser.email)
        return user
      })
      console.log(listChat)
      listChat.map(user => {
        const q = query(collection(db, "users"), where("email", "==", user[0]));
        const fetchData = async () => {
          const test = await getDocs(q)
          test.forEach((doc) => {
            if(doc){
              setUserList(oldArray => [...oldArray, doc.data()])
            }
          });
        }
        fetchData()
      })
    }
    console.log(userList)
  }, [chatsDoc]);

  if(searchUser)
  {
    console.log(searchUser)
    return (
      <div className="Body">
          <Card num={0} name={searchUser.name} photo={searchUser.photo} status={"Online"} date={14} email={searchUser.email}/>
      </div>
    )
  }

  if(userList){
      return (
      <div className="Body">
          {userList.map((user, id) => <Card key={id} num={0} name={user.name} photo={user.photo} status={"Online"} date={14} email={user.email}/>)}
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
