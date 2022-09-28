import MessageContainer from "./MessageContainer";
import SendMSF from "./SendMSF";
import Video from "./Video";
import './Video.css'


const Chat1 = ({messages , sendMessage}) => <div>
    {/* <MessageContainer messages={messages}/>
    <SendMSF sendMessage={sendMessage}/> */}
    <Video/>
</div>

export default Chat1;