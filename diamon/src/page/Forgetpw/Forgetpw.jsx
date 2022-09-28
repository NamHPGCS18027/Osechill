import React from "react";
import "../Forgetpw/Forgetpw.css";

function Forgetpw({ setFgpassword }) {
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
            <input className="inputemail"></input>
          </div>
          <button className="passwordbtn1">Retrieve Password</button>
          <button className="cancelbtn1" onClick={() => setFgpassword(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Forgetpw;
