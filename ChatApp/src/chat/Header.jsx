import { useContext } from 'react'
import './Header.css'
import img from '../assets/Victor.png';
import { BiSearch } from 'react-icons/bi';
import Context from '../contexts/Context';

function Header() {
  const onClick = () => setHidden(!hidden)
  const { hidden, setHidden } = useContext(Context)

  return (
    <div className="Header">
      <span className="Info" onClick={onClick}>
        <img src={img} alt="Logo" />;
        <h1>Victor Pereira</h1>
      </span>
      <span>
        <BiSearch size={24} className="Icon IconDisabled"/>  
      </span>
    </div>
  )
}

export default Header
