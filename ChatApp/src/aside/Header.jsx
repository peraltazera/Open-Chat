import { useState, useContext, useEffect } from 'react'
import './Header.css'
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSearch, BiExit, BiMessageDetail } from 'react-icons/bi';
import { auth } from "../../services/FireBaseConfigKey";
import { signOut } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/FireBaseConfigKey";
import Context from '../contexts/Context';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';

function Header() {

  console.log("Header Aside")

  const { searchUser, setSearchUser, inputSearchUser, setInputSearchUser } = useContext(Context)

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

  const handleSignout = () => {
    signOut(auth).then((result) => { console.log(auth) }).catch((error) => { console.log(auth) });
  }

  return (
    <div className="Header">
        <span className="Title">
          {/* <h1>Open.Chat</h1> */}
          <h1>{searchUser.name || "Open.Chat"}</h1>
          <div>
            <BiMessageDetail size={24}  className="Icon"/>
            <AiOutlineSetting size={24} className="Icon IconDisabled"/>
            <BiExit onClick={handleSignout} size={24} className="Icon"/>
          </div>
        </span>
        <span className="Input">
          <span className="SpanIcon"><BiSearch size={24} color="#999999" className="Icon"/></span>
          <input type="search" placeholder="Search..." value={inputSearchUser} onChange={(e) => setInputSearchUser(e.target.value)}/>
        </span>
    </div>
  )
}

export default Header
