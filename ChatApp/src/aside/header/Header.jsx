import { useContext } from 'react'
// import './Header.css'
import Context from '../../contexts/Context';
import SettingsIcon from './SettingsIcon'
import {HeaderStl, TitleStl} from './Header.style';

function Header() {

  console.log("Header Aside")

  const { title } = useContext(Context)

  return (
    <HeaderStl className="Header">
          <TitleStl>{title}</TitleStl>
          <SettingsIcon />
    </HeaderStl>
  )
}

export default Header
