import React, { useState } from "react";
import "./ModelCreateContact.css";
import iconClosepopup from "../../../image/Icon v3/icon_Close_popup.png";
import idcard from "../../../image/Icon-v4/id-card.png";
import ModelCreatContect from "./ModelCreatContect";
import ContactsAvilable from "./ContactsAvilable";
import ContactsUnAvilable from "./ContactsUnAvilable";

function ModelViewContact({ setViewContact }) {
    const [CreateContact, setCreateContact] = useState(false)
    const [Contacts, setContacts] = useState(false)
  return (
    <div className="modalBackgroundCreate">
      {CreateContact && <ModelCreatContect setCreateContact={setCreateContact}/>}
      <div className="modalContainerCreate">
        <div className="creacteUserHeader">
          <div className="headerTitle">All Contact</div>
          <img
            src={iconClosepopup}
            className="closeIcon"
            onClick={() => setViewContact(false)}
          />
        </div>
        <div className="CardBackground1">
          <div className="iconIdCard">
            <img src={idcard} className="iconIdCard" />
          </div>
          <div className="CardValue">
          create contracts for residents of the apartment
          </div>
          <div className="RetrieveBtnBackground">
            <div className="RetrieveBtn" onClick={() => setCreateContact(true)}>Create Contact</div>
          </div>
        </div>
        <div className="backgroundContact">
          <div className={`${Contacts== false ? "navbarContact" :"navbarContactAfter"}`} onClick={() => setContacts(false)}>Contacts</div>
          <div className={`${Contacts==true ?"navbarContact1" : "navbarContact1After"}`} onClick={() => setContacts(true)}>Expired Contract</div>
        </div>
        {Contacts ? <ContactsUnAvilable/> : <ContactsAvilable/>}
      </div>
    </div>
  );
}

export default ModelViewContact;
