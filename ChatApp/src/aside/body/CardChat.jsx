import { useState } from 'react'
import './CardChat.css'
import img from '../../assets/Victor.png';

function CardChat(props) {
  return (
    <div className="CardChat">
        <img src={img} alt="Logo" />
        <div className="Info">
          <span className="Top">
            <p>{props.author}</p>
            <p className="Date">{props.date}</p>
          </span>
          <span className="Bottom">
            <p className="Date">{props.status}</p>
            <p className="Number">{props.num}</p>
          </span>
        </div>
    </div>
  )
}

export default CardChat