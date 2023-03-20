import { useContext, useEffect, useState } from 'react'
import './Body.css'
import Card from './CardChat'
import Context from '../../contexts/Context';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, getDocs, doc, orderBy, limit } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import { BiSearch } from 'react-icons/bi';
import Settings  from './Settings';
import DivFlex from '../../styles/DivFlex.style';
import Text from '../../styles/Text.style';
import Language from '../../Language';

function Body() {

  console.log("Body Aside")

  const [userList, setUserList] = useState([])
  const [emailList, setEmailList] = useState([])
  const { searchUser, myUser, setChats, chatUser, settings, inputSearchUser, setInputSearchUser, setSearchUser, language } = useContext(Context)

  const chatsQuery = query(collection(db, "Chats"), where("user", "array-contains", myUser.email || ""));
  const userQuery = query(collection(db, "users"));

  const [chatsDoc] = useCollectionData(chatsQuery)

  const fetchData = async () => {
    const userDoc = await getDocs(userQuery)
    const chatList = []
    setUserList([])
    userDoc.forEach((doc) => {
      if(doc){
          emailList.map(user => {
          if(user.email == doc.data().email){
            // setUserList(oldArray => [...oldArray, {data: doc.data(), id: user.id, message: user.message}])
            chatList.push({data: doc.data(), id: user.id, message: user.message})
          }
        } )
      }
    });
    setUserList(chatList.sort((x, y) => x.message.messageDate - y.message.messageDate).reverse())
  }

  const previewMessage = message => {
    if(message)
    {
      if(message.length > 16)
      {
        message = message.slice(0, 16)
        message = message.split(" ")
        if(message.length > 1){
          message.pop()
        }
        message[message.length -1] = message[message.length -1].replace(/[^a-zA-Z0-9]/g, "");
        message = message.join(" ")
        message = message + "..."
      }
      return message
    }
    return {}
  }

  useEffect(() => {
    if(chatsDoc){
        setChats(chatsDoc)
        setEmailList(chatsDoc.map((chat) => {
          const user = chat.user.filter(user => user != myUser.email)
          return {email: user[0], id: chat.id, message: chat.message }
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
    return (
      <DivFlex backgroundColor="#212329" flex="1" flexDirection="column" overflowY="auto">
          <Settings />
      </DivFlex>
    )
  }

  if(searchUser)
  {
    return (
      <>
        <div className="Input">
          <span className="SpanIcon"><BiSearch size={24} color="#999999" className="Icon"/></span>
          <input type="search" placeholder={Language[language].aside.body.input} value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
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
            <input type="search" placeholder={Language[language].aside.body.input} value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
          </div>
          <div className="Body">
              {userList.map((user, id) => {
                let select = ""
                if(user.id == chatUser.id){
                  select = "Select"
                }
                return <Card key={id} num={0} name={user.data.name} photo={user.data.photo} status={previewMessage(user.message.message)} 
                date={`${user.message.messageDate.toDate().getHours()}:${user.message.messageDate.toDate().getMinutes()}`} 
                email={user.data.email} idChat={user.id} select={select}/>
                // return <Card key={id} num={0} name={user.data.name} photo={user.data.photo} status={"dasdasd"} 
                // date={"14"} 
                // email={user.data.email} idChat={user.id} select={select}/>
              } )}
          </div>
        </>
    )
  }
  
  return (
    <>
      <div className="Input">
        <span className="SpanIcon"><BiSearch size={24} color="#999999" className="Icon"/></span>
        <input type="search" placeholder={Language[language].aside.body.input} value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
      </div>
      <DivFlex backgroundColor="#212329" flex="1" flexDirection="column" padding="22px" alin overflowY="auto">
          <Text color='rgb(170, 170, 170)' fontSize="16px">{Language[language].aside.body.notFound}</Text>
      </DivFlex>
    </>
  )
}

export default Body
