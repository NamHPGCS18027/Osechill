import React from "react";
import "./ModelCreateUser.css";
import ModleManageResident from "../ManageResident/ModleManageResident";
import iconClosepopup from "../../../image/Icon v3/icon_Close_popup.png";
import close from "../../../image/Icon v3/close.png";
import info from "../../../image/Icon v3/info.png";
import star from "../../../image/Icon v3/star.png";
import male from "../../../image/Icon v3/male.png";
import female from "../../../image/Icon v3/female.png";
import unknown from "../../../image/Icon v3/unknown.png";
import unknown1 from "../../../image/Icon v3/unknown1.png";
import idcard from "../../../image/Icon-v4/id-card.png";
import Select from "react-select";
import { useState } from "react";

function ModleManageCreateUser({ setCreatenmodel }) {
  const [MaleGender, setMaleGender] = useState(false);
  const [FemaleGender, setFemaleGender] = useState(false);
  const [tyleinfo, settyleinfo] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [ResidentOpen, setResidentOpen] = useState(false)

  const handelgender = () => {
    setMaleGender(!MaleGender);
    setFemaleGender(!FemaleGender);
  };

  const options = [
    { value: "ID 1 - Apartment Name 1", label: "ID 1 - Apartment Name 1" },
    { value: "ID 2 - Apartment Name 2", label: "ID 2 - Apartment Name 2" },
    { value: "ID 3 - Apartment Name 3", label: "ID 3 - Apartment Name 3" },
  ];

  const customStyles = {
    control: (styles) => ({...styles,backgroundColor:"#FAFAFA00",color:"black",border:0,width: "700px",outline: "none",height: "35px"}),
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
    <div className="modalBackgroundCreate">
      {ResidentOpen && <ModleManageResident setResidentOpen={setResidentOpen}/>}
      <div className="modalContainerCreateManage">
        <div className="creacteUserHeader">
          <div className="headerTitle">Create resident profile</div>
          <img
            src={iconClosepopup}
            className="closeIcon"
            onClick={() => setCreatenmodel(false)}
          />
        </div>
        {/* -------------------- */}
        {tyleinfo ? (
          <div className="creacteUserHeader1">
            <div className="backgroundiconInfo">
              <img src={info} className="iconInfo" />
            </div>
            <div className="headerTitlebackground">
              <div className="headerTitle1">
                Please ensure that the employee's name is updated as per the
                identification document.
              </div>
            </div>
            <img
                src={close}
                className="closeIcon1"
                onClick={() => settyleinfo(false)}
              />
          </div>
        ) : (
          <></>
        )}
        {/* -------------------- */}
        <div className="CardBackground">
          <div className="iconIdCard">
            <img src={idcard} className="iconIdCard" />
          </div>
          <div className="CardValue">
            You may prefill this resident profile with existing data. Please
            review each section afterwards.
          </div>
          <div className="RetrieveBtnBackground" onClick={() => setResidentOpen(!ResidentOpen)}>
            <div className="RetrieveBtn">Retrieve resident info</div>
          </div>
        </div>
        <div className="GeneralTitle">General information</div>
        <div className="inputalluserinformationbackground">
          {/* full name */}
          <div className="inputfullname">
            <div className="inoutnametitle">
              Full Name <img src={star} className="staricon" />
            </div>
            <input className="inputname" />
            <hr className="lineCreate" />
          </div>
          {/* gender */}
          <div className="inputfullgender">
            <div className="inoutnametitle">
              Gender <img src={star} className="staricon" />
            </div>
            <div>
              <div className="backgroundgender">
                {MaleGender ? (
                  <div className="backgroundgender1 " onClick={handelgender}>
                    <img src={unknown1} className="unknown" />
                    <img src={male} className="maleicon" />
                  </div>
                ) : (
                  <div className="backgroundgender1 " onClick={handelgender}>
                    <img src={unknown} className="unknown" />
                    <img src={male} className="maleicon" />
                  </div>
                )}
              </div>
              <div className="gendertitle">Male</div>
            </div>
            <div>
              <div className="backgroundgender">
                {FemaleGender ? (
                  <div className="backgroundgender1 " onClick={handelgender}>
                    <img src={unknown} className="unknown" />
                    <img src={female} className="femaleicon" />
                  </div>
                ) : (
                  <div className="backgroundgender1 " onClick={handelgender}>
                    <img src={unknown1} className="unknown" />
                    <img src={female} className="femaleicon" />
                  </div>
                )}
              </div>
              <div className="gendertitle">Female</div>
            </div>
          </div>
          <div className="option1">
            {/* Nationality */}
            <div className="Nationality">
              <div className="inoutnametitle">
                Nationality <img src={star} className="staricon" />
                <div>
                  <select id="Nationality" className="inputNationality">
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="USA">USA</option>
                    <option value="Maslysia">Maslysia</option>
                  </select>
                </div>
                <hr className="line3" />
              </div>
            </div>
            {/* Country */}
            <div className="Country">
              <div className="inoutnametitle">
                Country <img src={star} className="staricon" />
                <div>
                  <select id="Country" className="inputCountry">
                    <option value="VietNam">VietNam</option>
                    <option value="Chauphi">Chau phi</option>
                    <option value="China">China</option>
                    <option value="ThaiLan">ThaiLan</option>
                  </select>
                </div>
                <hr className="line3" />
              </div>
            </div>
          </div>
          {/* Date of birth */}
          <div className="option1">
            <div className="dob">
              <div className="inoutnametitle">
                Date of birth <img src={star} className="staricon" />
              </div>
              <div>
                <input className="inputDob" placeholder="DD/MM/YYYY" />
              </div>
              <div>
                <hr className="line3" />
              </div>
            </div>
            {/* Age */}
            <div className="age">
              <div className="inoutnametitle">
                Age <img src={star} className="staricon" />
              </div>
              <div>25</div>
            </div>
          </div>
          <div className="option1">
            {/* ID Type */}
            <div className="Typeid">
              <div className="inoutnametitle">
                ID Type <img src={star} className="staricon" />
                <div>
                  <select id="Country" className="inputCountry">
                    <option value="Citizen ID1">Citizen ID</option>
                    <option value="Citizen ID2">Citizen ID 1</option>
                    <option value="Citizen ID3">Citizen ID 2</option>
                    <option value="Citizen ID4">Citizen ID 3</option>
                  </select>
                </div>
                <hr className="line3" />
              </div>
            </div>
            <div className="IDNumber">
              <div className="inoutnametitle">
                ID Number <img src={star} className="staricon" />
                <div>
                  <input className="inputDob" />
                </div>
                <hr className="line3" />
              </div>
            </div>
          </div>
          {/* Block */}
          <div className="option1">
            <div className="Role">
              <div className="inoutnametitle">
                Block <img src={star} className="staricon" />
                <div>
                  <select id="role" className="inputBlock">
                    <option value="Citizen">Citizen ID</option>
                    <option value="Manage">Manage</option>
                    <option value="Admin">Admin</option>
                    <option value="Boss">Boss</option>
                  </select>
                </div>
                <hr className="line5" />
              </div>
            </div>
          </div>
          {/* Apartment Name */}
          <div className="option1">
            <div className="Role">
              <div className="inoutnametitle">
                Apartment Name <img src={star} className="staricon" />
                <div>
                  <Select
                    id="role"
                    closeMenuOnSelect={false}
                    options={options}
                    defaultValue={selectedOption}
                    isMulti
                    onChange={setSelectedOption}
                    // className="selectinput"
                    styles={customStyles}
                  />
                </div>
                <hr className="line5" />
              </div>
            </div>
          </div>
          {/* Residential Address */}
          <div className="inputfullname">
            <div className="inoutnametitle">
              Residential Address <img src={star} className="staricon" />
            </div>
            <input className="inputname" />
            <hr className="lineCreate" />
          </div>
          <div className="GeneralTitle1">Contact information</div>
          <div className="inputfullname">
            <div className="inoutnametitle">
              Email address <img src={star} className="staricon" />
            </div>
            <input
              className="inputname"
              placeholder="local-part@domainName.com = ex: jay520@gmail.com"
            />
            <hr className="lineCreate" />
          </div>
          <div className="option1">
            {/* ID Type */}
            <div className="Typeid">
              <div className="inoutnametitle">
                Country Code <img src={star} className="staricon" />
                <div>
                  <select id="Country" className="inputCountry">
                    <option value="Citizen ID1">+84</option>
                    <option value="Citizen ID2">+92</option>
                    <option value="Citizen ID3">+25</option>
                    <option value="Citizen ID4">+75</option>
                  </select>
                </div>
                <hr className="line3" />
              </div>
            </div>
            <div className="IDNumber">
              <div className="inoutnametitle">
                Phone Number <img src={star} className="staricon" />
                <div>
                  <input className="inputDob" />
                </div>
                <hr className="line3" />
              </div>
            </div>
            <div>
              <div
                className="Cancelbtnuser"
                onClick={() => setCreatenmodel(false)}
              >
                <div>Cancel</div>
              </div>
              <div className="Createbtnuser">
                <div>Create</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModleManageCreateUser;
