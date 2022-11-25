import React, { useState } from "react";
import "../Forgetpw/Forgetpw.css";
import { Url } from "../../Url/Url";

function Forgetpw({ setFgpassword }) {
  const [ForgetPW, setForgetPW] = useState('')

  const ForgetPassWord = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(Url + `/api/Auth/ForgotPassword?${ForgetPW}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  
  return (
    <div className="modalBackground1">
      <div className="modalContainer1">
        <div className="box1">
          <div className="signinname1">FORGOT YOUR PASSWORD ?</div>
          <span className="text1">
            Please enter the e-mail address that you provided in the contract.
            We will send your new password to that address.
          </span>
          <div>
            <div className="text">Enter your email address here:</div>
            <input className="inputemail" value={ForgetPW} onChange={e => setForgetPW(e.target.value)}></input>
          </div>
          <button className="passwordbtn1" onClick={ForgetPassWord}>Retrieve Password</button>
          <button className="cancelbtn1" onClick={() => setFgpassword(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Forgetpw;
