import { useState } from 'react'
import './Body.css'
import Message from './Message'

function Body() {
  return (
    <div className="Body">
        <Message msg="asdasdasdasdasdasdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." author="asdasd"/>
        <Message msg="asdaasdasdsd" author="Victor"/>
        <Message msg="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="asdasdasdasdasdasdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="asdasdasdasdasasd" author="asdasd"/>
        <Message msg="asdaasdasdsd" author="Victor"/>
        <Message msg="asdaasdasdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="asdasdasdasdasdasdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="asdasdasdasdasasd" author="asdasd"/>
        <Message msg="asdaasdasdsd" author="Victor"/>
        <Message msg="asdaasdasdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
        <Message msg="asdasd" author="Victor"/>
    </div>
  )
}

export default Body
