import React , {useState} from "react";
import "./ModelCreateContact.css";
import iconClosepopup from "../../../image/Icon v3/icon_Close_popup.png";
import star from "../../../image/Icon v3/star.png";
import Select from "react-select";

function ModelCreatContect({ setCreateContact }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "ID 1 - Apartment Name 1", label: "ID 1 - Apartment Name 1" },
    { value: "ID 2 - Apartment Name 2", label: "ID 2 - Apartment Name 2" },
    { value: "ID 3 - Apartment Name 3", label: "ID 3 - Apartment Name 3" },
  ];

  const customStyles = {
    control: (styles) => ({...styles,backgroundColor:"#FAFAFA00",color:"black",border:0,width: "500px",outline: "none",height: "30px"}),
    options: (styles , {data,isFocused,isSelected}) =>{
      console.log("options",data,isFocused,isSelected)
      return { ...styles}
    },
    multiValue: (styles, {data}) =>{
      return{
        ...styles,
        color: "back"
      }
    },
    multiValueLabel: (styles, {data}) =>{
      return{
        ...styles,
        width: "150px",
        height: "28px",
        marginTop:"2px",
        marginLeft:"10px",
        fontSize:"12px",
        fontWeight: "600"
      }
    }
  };
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
              User Acount
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
            Start Date 
            <img src={star} className="staricon" /> :
          </div>
          <input type="date" className="inputContacts" placeholder="Email User"></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            End Date
            <img src={star} className="staricon" /> :
          </div>
          <input
            type="date"
            className="inputContacts"
            placeholder="Day Start Contract"
          ></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Last Signed Date 
            <img src={star} className="staricon" /> :
          </div>
          <input
            type="date"
            className="inputContacts"
            placeholder="Day End Contract"
          ></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
              Apartment 
            <img src={star} className="staricon" /> :
          </div>
          <div>
                  <Select
                    id="Apartment"
                    closeMenuOnSelect={false}
                    options={options}
                    defaultValue={selectedOption}
                    isMulti
                    onChange={setSelectedOption}
                    // className="SelectContacts"
                    styles={customStyles}
                    className="inputContacts"
                  />
                </div>
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
