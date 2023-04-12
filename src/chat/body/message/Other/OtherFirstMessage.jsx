import {FirstStl, ContainerMessageStl, ContainerMessageTextStl, MessageStl, ImageStl, InfoStl, DateStl} from './OtherFirstMessage.style'

function OtherFirstMessage(props) {
    return (
        <FirstStl>
            <ImageStl src={props.photo} alt="Logo" />
            <ContainerMessageStl>
                <InfoStl>
                    <p>{props.name}</p>
                </InfoStl>
                <ContainerMessageTextStl>
                    <DateStl>{props.formatHours(props.date)}</DateStl>
                    <MessageStl>
                        <p>{props.msg}</p>
                    </MessageStl>
                </ContainerMessageTextStl>
            </ContainerMessageStl>
        </FirstStl>
    )
}

export default OtherFirstMessage
