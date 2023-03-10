import { useContext } from 'react'
import './Header.css'
import { BiSearch } from 'react-icons/bi';
import Context from '../contexts/Context';

function Header() {

  console.log("Header Chat")

  const onClick = () => setInfo(!info)
  const { info, setInfo, chatUser } = useContext(Context)

  return (
    <div className="Header">
      <span className="Info" onClick={onClick}>
        <img src={chatUser.photo} alt="Logo" />
        <h1>{chatUser.name}</h1>
      </span>
      <span>
        <BiSearch size={24} className="Icon IconDisabled"/>  
      </span>
    </div>
  )
}

export default Header
