import { useContext } from 'react'
import './Header.css'
import { AiOutlineSetting, AiOutlineClose } from 'react-icons/ai';
import Context from '../../contexts/Context';

function SettingsIcon() {

  console.log("SettingsIcon Aside")

  const { settings, setSettings, setTitle } = useContext(Context)

  const Settings = () => {
    if(settings){
      setTitle("Chats")
    }
    else
    {
      setTitle("Settings")
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