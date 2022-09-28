const MessageContainer = ({messages}) => {
    return <div>
        {messages.map( (m , index) =>
            <div key={index}>
                <div>{m.message}</div>
                <div>{m.user}</div>
            </div>
        )}
    </div>
}

export default MessageContainer;