import React from "react";
import "./ModelCreateContact.css";
import iconClosepopup from "../../../image/Icon v3/icon_Close_popup.png";
import star from "../../../image/Icon v3/star.png";

function ModelCreatContect({ setCreateContact }) {
  return (
    <div className="BackGroundResident">
      <div className="ResidentHeaderBackground">
        <div className="headerTitle">Create Contract</div>
        <img
          src={iconClosepopup}
          className="closeIcon"
          onClick={() => setCreateContact(false)}
        />
      </div>
      <div className="backgroundContacts">
        <h1 className="TitleContractinformation">Contract information</h1>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Full Name
            <img src={star} className="staricon" /> :
          </div>
          <input
            className="inputContacts"
            placeholder="Input Full Name"
          ></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Email
            <img src={star} className="staricon" /> :
          </div>
          <input className="inputContacts" placeholder="Email User"></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Day Start
            <img src={star} className="staricon" /> :
          </div>
          <input
            className="inputContacts"
            placeholder="Day Start Contract"
          ></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Day End
            <img src={star} className="staricon" /> :
          </div>
          <input
            className="inputContacts"
            placeholder="Day End Contract"
          ></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Phone Number
            <img src={star} className="staricon" /> :
          </div>
          <input
            className="inputContacts"
            placeholder="User Phone Number"
          ></input>
          <hr className="linecontact" />
        </div>
        <div>
          <div
            className="CancelbtContect"
            onClick={() => setCreateContact(false)}
          >
            <div>Cancel</div>
          </div>
          <div className="Createbtnuser">
            <div>Create</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelCreatContect;
