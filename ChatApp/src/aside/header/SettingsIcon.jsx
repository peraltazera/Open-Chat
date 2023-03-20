import { useContext } from 'react'
// import './Header.css'
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai';
import Context from '../../contexts/Context';
import Language from '../../Language';

function SettingsIcon() {

  console.log("SettingsIcon Aside")

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
        <AiOutlineClose size={24} className="Icon" onClick={Settings}/>
      ) 
    }
    else
    {
      return (
        <AiOutlineSetting size={24} className="Icon" onClick={Settings}/>
      ) 
    }
}

export default SettingsIcon