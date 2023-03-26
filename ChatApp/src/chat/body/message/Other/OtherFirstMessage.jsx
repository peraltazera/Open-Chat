// import './FirstMessage.css'
import {FirstStl, ContainerMessageStl, ContainerMessageTextStl, MessageStl, ImageStl, InfoStl, DateStl} from './OtherFirstMessage.style';

function FirstMessage(props) {
    return (
        <FirstStl>
            <ImageStl src={props.photo} alt="Logo" />
            <ContainerMessageStl>
                <InfoStl>
                    <p>{props.name}</p>
                    {/* <p className="Date">{`${props.date.toDate().getUTCHours()}:${props.date.toDate().getUTCMinutes()}`}</p> */}
                </InfoStl>
                <ContainerMessageTextStl>
                    <DateStl>{`${props.date.toDate().getHours()}:${props.date.toDate().getMinutes()}`}</DateStl>
                    <MessageStl>
                        <p>{props.msg}</p>
                    </MessageStl>
                </ContainerMessageTextStl>
            </ContainerMessageStl>
        </FirstStl>
    )
}

export default FirstMessage
