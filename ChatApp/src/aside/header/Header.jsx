import { useContext, useEffect } from 'react'
import './Header.css'
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../../services/FireBaseConfigKey";
import Context from '../../contexts/Context';
import SettingsIcon from './SettingsIcon'

function Header() {

  console.log("Header Aside")

  const { title } = useContext(Context)

  return (
    <div className="Header">
        <span className="Title">
          <h1>{title}</h1>
          <div>
            <SettingsIcon />
          </div>
        </span>
    </div>
  )
}

export default Header
