import { useContext } from 'react'
import { BiSearch } from 'react-icons/bi'
import Context from '../contexts/Context'
import { HeaderStl, InfoStl, ImageStl, TitleStl } from './Header.styles'
import IconDisabled from '../styles/IconDisabled.style'

function Header() {

  const onClick = () => setInfo(!info)
  const { info, setInfo, chatUser } = useContext(Context)

  return (
    <HeaderStl>
      <InfoStl onClick={onClick}>
        <ImageStl src={chatUser.photo} alt="Logo" />
        <TitleStl>{chatUser.name}</TitleStl>
      </InfoStl>
      <IconDisabled>
        <BiSearch size={24}/>  
      </IconDisabled>
    </HeaderStl>
  )
}

export default Header
