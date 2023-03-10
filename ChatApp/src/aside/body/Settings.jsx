import './Settings.css'
import { auth } from "../../../services/FireBaseConfigKey";
import { BiExit } from 'react-icons/bi';
import { signOut } from "firebase/auth";

function Settings() {

  console.log("Settings")

  const handleSignout = () => {
    signOut(auth).then((result) => { console.log(auth) }).catch((error) => { console.log(auth) });
  }

  return (
    <div className="Settings">
      <BiExit size={24} className="Icon" onClick={handleSignout}/>
    </div>
  )
}

export default Settings
