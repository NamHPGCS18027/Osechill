import React, { useState } from "react";
import "./Modellogin.css";
import hide from "../../image/Icon-Login/view_pw_icon.png";
import Forgetpw from "../Forgetpw/Forgetpw";
import { Url } from "../../Url/Url";
import hidepwicon from "../../image/Icon-Login/hide_pw_icon.png";

function Modellogin({ setloginmodel }) {
  const [Fgpassword, setFgpassword] = useState(false);
  const [LoginEmail, setLoginEmail] = useState("");
  const [LoginPassword, setLoginPassword] = useState("");
  const [ViewPassword, setViewPassWord] = useState(true);

  const handleViewPassword = () => {
    setViewPassWord(!ViewPassword);
  };
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

    fetch(Url + "/api/Auth/Login", requestOptions)
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

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="box">
          <div className="signinname">SIGN IN</div>
          <div>
            <div className="text">Username:</div>
            <input
              className="inputtext"
              value={LoginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <div className="text">
              Password:
              <span className="forgotpw" onClick={() => setFgpassword(true)}>
                Forgot password?
              </span>
            </div>
            <input
              className="inputtext"
              type={`${ViewPassword ? "password" : "text"}`}
              value={LoginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            ></input>
            {ViewPassword ? (
              <img
                className="passwordlogo"
                src={hide}
                onClick={handleViewPassword}
              />
            ) : (
              <img
                className="passwordlogo"
                src={hidepwicon}
                onClick={handleViewPassword}
              />
            )}
          </div>
          <button className="signinbtn" onClick={login}>
            Sign in
          </button>
          <button className="cancelbtn" onClick={() => setloginmodel(false)}>
            Cancel
          </button>
        </div>
      </div>
      {Fgpassword && <Forgetpw setFgpassword={setFgpassword} />}
    </div>
  );
}

export default Modellogin;
