import { useContext } from 'react'
// import './Header.css'
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai';
import Context from '../../contexts/Context';
import Language from '../../Language';
import Icon from '../../styles/Icon.style';

function SettingsIcon() {

  const { settings, setSettings, setTitle, language } = useContext(Context)

  const Settings = () => {
    if(settings){
      setTitle(Language[language].aside.header.titleChat)
    }
    else
    {
      setTitle(Language[language].aside.header.titleSetings)
    }
    setSettings(!settings);
  }

    if(settings)
    {
      return (
        <Icon>
          <AiOutlineClose size={24} onClick={Settings}/>
        </Icon>
      ) 
    }
    else
    {
      return (
        <Icon>
          <AiOutlineSetting size={24} onClick={Settings}/>
        </Icon>
      ) 
    }
}

export default SettingsIcon