//import './OtherMessage.css'
import {MyMessageStl, ContainerMessageStl, MessageStl, DateStl} from './MyMessage.style';

function OtherMessage(props) {
    return (
        <MyMessageStl>
            {/* <img src={props.photo} alt="Logo" /> */}
            <ContainerMessageStl>
                <DateStl>{`${props.date.toDate().getHours()}:${props.date.toDate().getMinutes()}`}</DateStl>
                <MessageStl>
                    <p>{props.msg}</p>
                </MessageStl>
            </ContainerMessageStl>
        </MyMessageStl>
    )
}

export default OtherMessage 