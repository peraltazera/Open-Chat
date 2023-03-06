import { useContext } from 'react'
import './Message.css'
import img from '../../assets/Victor.png';
import Context from '../../contexts/Context';

function Message(props) {

    const { user } = useContext(Context)
    
    const message = props.author == user.email ? "MyMessage" : "OtherMessage"

    return (
        <div className={message}>
            <img src={img} alt="Logo" />
            <div className="ContainerMessage">
                <div className="Info">
                    <p className="Name">{props.author}</p>
                    <p className="Date">13:12 PM</p>
                </div>
                <div className="Message">
                    <p>{props.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
