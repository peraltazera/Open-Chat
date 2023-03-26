import { useContext, useEffect, useState } from 'react'
import './Body.css'
import Card from './CardChat'
import Context from '../../contexts/Context';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { query, collection, where, getDocs, doc, orderBy, limit } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import { BiSearch } from 'react-icons/bi';
import Settings  from './Settings';
import IconDisabled from '../../styles/IconDisabled.style';
import Language from '../../Language';
import {BodyStl, SpanIconStl, InputStl, InputContainerStl, NotFoundStl, BodySettingsStl} from './Body.style'

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
    return ""
  }

  const formatDate = date => {
    if(date)
    {
      return `${date.toDate().getHours()}:${date.toDate().getMinutes()}`
    }
    return ""
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
      <BodySettingsStl>
          <Settings />
      </BodySettingsStl>
    )
  }

  if(searchUser)
  {
    return (
      <>
        <InputContainerStl>
          <SpanIconStl>
              <BiSearch size={24}/>
          </SpanIconStl>
          <InputStl type="search" placeholder={Language[language].aside.body.input} value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
        </InputContainerStl>
        <BodyStl>
            <Card num={0} name={searchUser.name} photo={searchUser.photo} status={"Online"} date={14} email={searchUser.email} />
        </BodyStl>
      </>
    )
  }

  if(userList){
      return (
        <>
          <InputContainerStl>
            <SpanIconStl>
                <BiSearch size={24}/>
            </SpanIconStl>
            <InputStl type="search" placeholder={Language[language].aside.body.input} value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
          </InputContainerStl>
          <BodyStl>

              {userList.map((user, id) => {
                let select = ""
                if(user.id == chatUser.id){
                  select = "Select"
                }
                return <Card key={id} num={0} name={user.data.name} photo={user.data.photo} status={previewMessage(user.message.message)} 
                date={formatDate(user.message.messageDate)} 
                email={user.data.email} idChat={user.id} select={select}/>
              } )}



              {/* {userList.map((user, id) => {
                let select = ""
                if(user.id == chatUser.id){
                  select = "Select"
                }
                return <Card key={id} num={0} name={user.data.name} photo={user.data.photo} status={previewMessage(user.message.message)} 
                date={formatDate(user.message.messageDate)} 
                email={user.data.email} idChat={user.id} select={select}/>
              } )}
              {userList.map((user, id) => {
                let select = ""
                if(user.id == chatUser.id){
                  select = "Select"
                }
                return <Card key={id} num={0} name={user.data.name} photo={user.data.photo} status={previewMessage(user.message.message)} 
                date={formatDate(user.message.messageDate)} 
                email={user.data.email} idChat={user.id} select={select}/>
              } )} */}



          </BodyStl>
        </>
    )
  }
  
  return (
    <>
      <InputContainerStl>
        <SpanIconStl>
            <BiSearch size={24}/>
        </SpanIconStl>
        <InputStl type="search" placeholder={Language[language].aside.body.input} value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
      </InputContainerStl>
      <NotFoundStl >
          <p>{Language[language].aside.body.notFound}</p>
      </NotFoundStl>
    </>
  )
}

export default Body
