import { useContext } from 'react'
import Context from '../../contexts/Context'
import SettingsIcon from './SettingsIcon'
import {HeaderStl, TitleStl} from './Header.style'

function Header() {

  const { title } = useContext(Context)

  return (
    <HeaderStl>
          <TitleStl>{title}</TitleStl>
          <SettingsIcon />
    </HeaderStl>
  )
}

export default Header
