import { useContext } from 'react'
// import './Settings.css'
import { auth } from "../../../services/FireBaseConfigKey";
import { BiExit } from 'react-icons/bi';
import { signOut } from "firebase/auth";
import Context from '../../contexts/Context';
import Language from '../../Language';
import Switch from "react-switch";
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import {SettingsStl} from './Settings.style';
import Icon from '../../styles/Icon.style';

function Settings() {

  const { language, setLanguage, setTitle, checked, setChecked, theme, setTheme } = useContext(Context)

  const handleSignout = () => {
    signOut(auth).then((result) => { console.log(auth) }).catch((error) => { console.log(auth) });
  }

  const changeLanguage = (e) => {
    setLanguage(e.target.value)
    setTitle(Language[e.target.value].aside.header.titleSetings)
  }

  const handleChange = () => {
    setChecked(!checked)
    setTheme(theme.title == "light" ? dark : light)
  }

  return (
    <SettingsStl>
      <label for="cars">{Language[language].aside.settings.language}: 
        <select value={language} onChange={e => changeLanguage(e)} >
          <option value="english">english</option>
          <option value="portuguese">portuguese</option>
          <option value="spanish">spanish</option>
        </select>
      </label>
      <label htmlFor="material-switch">
          <span>{theme.title == "light" ? Language[language].aside.settings.light : Language[language].aside.settings.dark}: </span>
          <Switch
            checked={checked}
            onChange={handleChange}
            onColor="#cfcfcf"
            onHandleColor="#e2e2e2"
            offColor="#525252"
            offHandleColor="#424242"
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
      </label>
      <Icon>
        <BiExit size={24} className="Icon" onClick={handleSignout}/>
      </Icon>
    </SettingsStl>
  )
}

export default Settings
