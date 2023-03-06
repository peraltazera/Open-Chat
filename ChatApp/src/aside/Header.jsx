import './Header.css'
import { AiOutlineSetting } from 'react-icons/ai';
import { BiSearch, BiExit, BiMessageDetail } from 'react-icons/bi';
import { auth } from "../../services/FireBaseConfigKey";
import { signOut } from "firebase/auth";

function Header() {

  const handleSignout = () => {
    console.log(auth)
    signOut(auth).then((result) => { console.log(auth) }).catch((error) => { console.log(auth) });
  }

  return (
    <div className="Header">
        <span className="Title">
          <h1>Open.Chat</h1>
          <div>
            <BiMessageDetail size={24}  className="Icon"/>
            <AiOutlineSetting size={24} className="Icon IconDisabled"/>
            <BiExit onClick={handleSignout} size={24} className="Icon"/>
          </div>
        </span>
        <span className="Input">
          <span className="SpanIcon"><BiSearch size={24} color="#999999" className="Icon"/></span>
          <input type="search" placeholder="Search..." />
        </span>
    </div>
  )
}

export default Header
