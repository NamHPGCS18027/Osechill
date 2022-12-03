import { useState } from "react"

const SendMSF = ({sendMessage}) => {
    const [message ,setmessage] = useState('')
    return <form onSubmit={e => {
        e.preventDefault();
        sendMessage(message);
        setmessage('')
    }}>
        <input placeholder="message....." onChange={e => setmessage(e.target.value)} value={message}/>
        <button disabled={!message}>send</button>
    </form>
}

export default SendMSF