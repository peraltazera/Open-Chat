import { useContext } from 'react'
// import './Header.css'
import Context from '../../contexts/Context';
import SettingsIcon from './SettingsIcon'
import DivFlex from '../../styles/DivFlex.style';
import Title from '../../styles/Title.style';

function Header() {

  console.log("Header Aside")

  const { title } = useContext(Context)

  return (
    <DivFlex height="96px" padding="40px 20px" 
    justifyContent="space-between" alignItems="center" className="Header">
          <Title>{title}</Title>
          <SettingsIcon />
    </DivFlex>
  )
}

export default Header
