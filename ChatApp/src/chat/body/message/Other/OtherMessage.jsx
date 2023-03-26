// import './OtherMessage.css'
import {OtherStl, ContainerMessageStl, MessageStl, DateStl} from './OtherMessage.style'

function OtherMessage(props) {
    return (
        <OtherStl>
            {/* <img src={props.photo} alt="Logo" /> */}
            <ContainerMessageStl>
                <DateStl>{`${props.date.toDate().getHours()}:${props.date.toDate().getMinutes()}`}</DateStl>
                <MessageStl>
                    <p>{props.msg}</p>
                </MessageStl>
            </ContainerMessageStl>
        </OtherStl>
    )
}

export default OtherMessage 