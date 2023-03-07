import { useContext } from 'react'
import './Message.css'
import img from '../../assets/Victor.png';
import Context from '../../contexts/Context';

function Message(props) {

    const { myUser } = useContext(Context)
    
    const message = props.email == myUser.email ? "MyMessage" : "OtherMessage"

    return (
        <div className={message}>
            <img src={props.photo} alt="Logo" />
            <div className="ContainerMessage">
                <div className="Info">
                    <p className="Name">{props.name}</p>
                    <p className="Date">{`${props.date.toDate().getUTCHours()}:${props.date.toDate().getUTCMinutes()}`}</p>
                </div>
                <div className="Message">
                    <p>{props.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
