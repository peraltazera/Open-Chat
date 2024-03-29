import { useContext } from 'react'
// import './Settings.css'
import { auth } from "../../../services/FireBaseConfigKey"
import { BiExit } from 'react-icons/bi'
import { signOut } from "firebase/auth"
import Context from '../../contexts/Context'
import Language from '../../Language'
import Switch from "react-switch"
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'
import {SettingsStl,SelectStl,SelectContainerStl,SwitchContainerStl,SwitchStl,LogoutStl,OptionStl} from './Settings.style'
import Icon from '../../styles/Icon.style'

function Settings() {

  const { language, setLanguage, setTitle, checked, setChecked, theme, setTheme } = useContext(Context)

  const handleSignout = () => {
    signOut(auth).then((result) => { console.log(auth) }).catch((error) => { console.log(auth) })
  }

  const changeLanguage = (e) => {
    localStorage.setItem("language", e.target.value);
    setLanguage(e.target.value)
    setTitle(Language[e.target.value].aside.header.titleSetings)
  }

  const handleChange = () => {
    setChecked(!checked)
    localStorage.setItem("theme", theme.title == "light" ? "dark" : "light");
    setTheme(theme.title == "light" ? dark : light)
  }

  return (
    <SettingsStl>
      <SelectContainerStl for="cars">
        {Language[language].aside.settings.language}: 
        <SelectStl value={language} onChange={e => changeLanguage(e)} >
          <OptionStl value="english">english</OptionStl>
          <OptionStl value="portuguese">portuguese</OptionStl>
          <OptionStl value="spanish">spanish</OptionStl>
        </SelectStl>
      </SelectContainerStl>
      <SwitchContainerStl htmlFor="material-switch">
          <span>{theme.title == "light" ? Language[language].aside.settings.light : Language[language].aside.settings.dark}: </span>
          <SwitchStl>
            <Switch
              checked={checked}
              onChange={handleChange}
              onColor="#525252"
              onHandleColor="#424242"
              offColor="#cfcfcf"
              offHandleColor="#e2e2e2"
              handleDiameter={22}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={14}
              width={36}
              className="react-switch"
              id="material-switch"
            />
          </SwitchStl>
      </SwitchContainerStl>
      <Icon>
        <LogoutStl onClick={handleSignout} >
          Logout
          <BiExit size={18} onClick={handleSignout}/>
        </LogoutStl>
      </Icon>
    </SettingsStl>
  )
}

export default Settings
