import { useContext, useEffect, useState } from 'react'
import './Body.css'
import Card from './CardChat'
import Context from '../../contexts/Context';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import { BiSearch } from 'react-icons/bi';
import Settings  from './Settings';

function Body() {

  console.log("Body Aside")

  const [userList, setUserList] = useState([])
  const [emailList, setEmailList] = useState([])
  const { searchUser, myUser, setChats, chatUser, settings, inputSearchUser, setInputSearchUser, setSearchUser } = useContext(Context)

  const chatsQuery = query(collection(db, "Chats"), where("user", "array-contains", myUser.email || ""));
  const userQuery = query(collection(db, "users"));

  const [chatsDoc, loading] = useCollectionData(chatsQuery)

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

  const validate = (email) => {
    let res = false;
    let re = /\S+@\S+\.\S+/;
    res = re.test(email)
    return re.test(email);
  }

  useEffect(() => {
    if(validate(inputSearchUser)){
      const q = query(collection(db, "users"), where("email", "==", inputSearchUser));
      const fetchData = async () => {
        const test = await getDocs(q)
        setSearchUser("")
        test.forEach((doc) => {
          if(doc){
            setSearchUser(doc.data())
          }
        });
      }
      fetchData()
    }
    else{
      setSearchUser("")
    }
  }, [inputSearchUser]);

  if(settings)
  {
    console.log(settings)
    return (
      <div className="Body">
          <Settings />
      </div>
    )
  }

  if(searchUser)
  {
    return (
      <>
        <div className="Input">
          <span className="SpanIcon"><BiSearch size={24} color="#999999" className="Icon"/></span>
          <input type="search" placeholder="Search or start a new chat" value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
        </div>
        <div className="Body">
            <Card num={0} name={searchUser.name} photo={searchUser.photo} status={"Online"} date={14} email={searchUser.email} />
        </div>
      </>
    )
  }

  if(userList){
      return (
        <>
          <div className="Input">
            <span className="SpanIcon"><BiSearch size={24} color="#999999" className="Icon"/></span>
            <input type="search" placeholder="Search or start a new chat" value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
          </div>
          <div className="Body">
              {userList.map((user, id) => {
                let select = ""
                if(user.id == chatUser.id){
                  select = "Select"
                }
                return <Card key={id} num={0} name={user.data.name} photo={user.data.photo} status={"Online"} date={14} email={user.data.email} idChat={user.id} select={select}/>
              } )}
          </div>
        </>
    )
  }
  
  return (
    <div className="Body">
        <p>User not found!</p>
    </div>
  )
}

export default Body
