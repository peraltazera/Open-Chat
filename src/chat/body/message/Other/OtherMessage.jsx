import {OtherStl, ContainerMessageStl, MessageStl, DateStl} from './OtherMessage.style'

function OtherMessage(props) {
    return (
        <OtherStl>
            <ContainerMessageStl>
                {
                    props.date.toDate().getMinutes() != props.lastDate.toDate().getMinutes() 
                    ? <DateStl>{props.formatHours(props.date)}</DateStl>
                    : null
                }
                <MessageStl>
                    <p>{props.msg}</p>
                </MessageStl>
            </ContainerMessageStl>
        </OtherStl>
    )
}

export default OtherMessage 