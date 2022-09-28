
import { HubConnectionBuilder, LogLevel , HttpTransportType } from "@microsoft/signalr";
import { useState } from "react";
import Chat1 from "./Chat1";
import jwt_decode from "jwt-decode";

function TestChat() {
  const [messages, setmessages] = useState([]);
  // const joinRoom = async (user , room) => {
  //   try {
  //     const connection = new HubConnectionBuilder()
  //     .withUrl("https://localhost:7175/chathud")
  //     .configureLogging(LogLevel.Information)
  //     .build();
  //     connection.on("",(user, message) => {
  //       console.log("message received : " , message);
  //     });
  //     await connection.start();
  //     await connection.invoke("JoinRoom" , {user , room})
  //     setconnection(connection);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");

  const login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: LoginEmail,
      password: LoginPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://localhost:7175/api/Auth/Login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        sessionStorage.setItem("accessToken", result.token);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
        alert("EMAIL OR PASSWORD ERROR");
      });
  };

  const sendMessage = async (message) => {
    try {
      const Authorization1 = sessionStorage.getItem("accessToken");
      const Authorization = "Bearer " + sessionStorage.getItem("accessToken");
      const receiverId = "6fff3de4-3d25-4713-8985-43e390ed951f";
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7175/chathub", {
          accessTokenFactory: () => Authorization1,
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets
        })
        .configureLogging(LogLevel.Information)
        .build();
      connection.on("Chat", (user, message) => {
        console.log(user, ":", message);
      });
      await connection.start();
      await connection.invoke(
        "SendMessageToUser",
        receiverId,
        message
      );
    } catch (error) {
      console.log(error);
    }
  };

  const HandleToken = () => {
    const token = sessionStorage.getItem("accessToken");
  const decoded = jwt_decode(token);
  console.log(decoded); 
  }
  

  return (
    <div className="chattext">
      <div>
        <input
          onChange={(e) => setLoginEmail(e.target.value)}
          value={LoginEmail}
        ></input>
        <input
          onChange={(e) => setLoginPassword(e.target.value)}
          value={LoginPassword}
        ></input>
        <button onClick={login}>login</button>
        <button onClick={HandleToken}>token</button>
      </div>
      <Chat1 messages={messages} sendMessage={sendMessage} />
    </div>
  );
}

export default TestChat;
