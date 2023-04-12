import {MyMessageStl, ContainerMessageStl, MessageStl, DateStl} from './MyMessage.style'

function OtherMessage(props) {
    return (
        <MyMessageStl>
            {/* <img src={props.photo} alt="Logo" /> */}
            <ContainerMessageStl>
                {
                    props.date.toDate().getMinutes() != props.lastDate.toDate().getMinutes() 
                    ? <DateStl>{props.formatHours(props.date)}</DateStl>
                    : null
                }
                <MessageStl>
                    <p>{props.msg}<br /></p>
                </MessageStl>
            </ContainerMessageStl>
        </MyMessageStl>
    )
}

export default OtherMessage 