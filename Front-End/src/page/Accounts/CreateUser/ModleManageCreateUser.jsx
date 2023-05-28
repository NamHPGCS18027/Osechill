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
import { Url } from "../../../Url/Url";
import { useEffect } from "react";

function ModleManageCreateUser({ setCreatenmodel }) {
  const [MaleGender, setMaleGender] = useState(false);
  const [FemaleGender, setFemaleGender] = useState(false);
  const [tyleinfo, settyleinfo] = useState(true);
  const token = sessionStorage.getItem("accessToken");
  const [ResidentOpen, setResidentOpen] = useState(false)
  const [AllRole, setAllRole] = useState([]);
  const [Username, setUsername] = useState("")
  const [fullname, setfullname] = useState("");
  const [isMale, setisMale] = useState(true);
  const [nationality, setnationality] = useState("");
  const [country, setcountry] = useState("");
  const [dob, setdob] = useState("");
  const [age, setage] = useState("");
  const [idType, setidType] = useState("");
  const [idNumber, setidNumber] = useState("");
  const [residentialAddress, setresidentialAddress] = useState("");
  const [email, setemail] = useState("");
  const [phoneCountryCode, setphoneCountryCode] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [listPhoneCode, setlistPhoneCode] = useState([])
  const [listNationality, setlistNationality] = useState([])
  const [role, setrole] = useState('')


  const handelgender = () => {
    setMaleGender(!MaleGender);
    setFemaleGender(!FemaleGender);
    setisMale(MaleGender)
  };

  useEffect(() => {
    GetAllRole();
    GetLookup();
  }, [token]);

  const GetAllRole = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(Url + "/api/Roles/GetAllRoles", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllRole(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const GetLookup = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(Url + "/api/LookUp/GetAllLookUp", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setlistPhoneCode(result.listPhoneCode);
        setlistNationality(result.listNationality)
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  const ManageCreacteUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    var raw = JSON.stringify({
      UserName: Username,
      fullname: fullname,
      isMale: isMale,
      nationality: nationality,
      country: country,
      dob: dob,
      age: age,
      idType: idType,
      idNumber: idNumber,
      roleID: role,
      residentialAddress: residentialAddress,
      email: email,
      phoneCountryCode: phoneCountryCode,
      phoneNumber: phoneNumber,
      isStaff : false,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(Url+"/api/FE002/CreateProfile", requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert(result.message)
        setReload(true)
      })
      .catch((error) => {
        console.log("error", error);
        alert(error)
      });
  };

  const filterRole = AllRole.filter(function (AllRoles) {
    return AllRoles.name === "resident";
  });

  const ListRole = filterRole.map((data) => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));
  
  const Phonecode = listPhoneCode.map((data) =>(
    <option key={data.lookUpID} value={data.valueString}>
      {data.valueString}
    </option>
  ))

  const National = listNationality.map((data) =>(
    <option key={data.lookUpID} value={data.valueString}>
      {data.valueString}
    </option>
  ))
  
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
        <div className="inputfullname">
            <div className="inoutnametitle">
              User Name <img src={star} className="staricon" />
            </div>
            <input className="inputname" value={Username} onChange={e => setUsername(e.target.value)}/>
            <hr className="lineCreate" />
          </div>
          {/* full name */}
          <div className="inputfullname">
            <div className="inoutnametitle">
              Full Name <img src={star} className="staricon" />
            </div>
            <input className="inputname" value={fullname} onChange={e => setfullname(e.target.value)}/>
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
                  <select id="Nationality" className="inputNationality" value={nationality} onChange={e => setnationality(e.target.value)}>
                  <option>--</option>
                    {National}
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
                  <select id="Country" className="inputCountry" value={country} onChange={e => setcountry(e.target.value)}>
                  <option>--</option>
                  {National}
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
                Date of birth <img src={star} className="staricon"  />
              </div>
              <div>
                <input className="inputDob" placeholder="DD/MM/YYYY" type="date" value={dob} onChange={ e => setdob(e.target.value)}/>
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
              <input className="inputDob" placeholder="Age" type="number" value={age} onChange={ e => setage(e.target.value)} />
            </div>
          </div>
          <div className="option1">
            {/* ID Type */}
            <div className="Typeid">
              <div className="inoutnametitle">
                ID Type <img src={star} className="staricon" />
                <div>
                  <select id="Country" className="inputCountry" value={idType} onChange={ e => setidType(e.target.value)}>
                    <option>--</option>
                    <option value="citizen identification">Citizen Identification</option>
                    <option value="Passport">Passport</option>
                  </select>
                </div>
                <hr className="line3" />
              </div>
            </div>
            <div className="IDNumber">
              <div className="inoutnametitle">
                ID Number <img src={star} className="staricon" />
                <div>
                  <input className="inputDob" type="number" value={idNumber} onChange={ e => setidNumber(e.target.value)}/>
                </div>
                <hr className="line3" />
              </div>
            </div>
          </div>
          {/* Residential Address */}
          <div className="inputfullname">
            <div className="inoutnametitle">
              Residential Address <img src={star} className="staricon" />
            </div>
            <input className="inputname" value={residentialAddress} onChange={ e => setresidentialAddress(e.target.value)}/>
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
              value={email}
              onChange={ e => setemail(e.target.value)}
            />
            <hr className="lineCreate" />
          </div>
          <div className="option1">
            {/* ID Type */}
            <div className="Typeid">
              <div className="inoutnametitle">
                Country Code <img src={star} className="staricon" />
                <div>
                  <select id="Country" className="inputCountry" value={phoneCountryCode} onChange={ e => setphoneCountryCode(e.target.value)}>
                  <option>--</option>
                  {Phonecode}
                  </select>
                </div>
                <hr className="line3" />
              </div>
            </div>
            <div className="IDNumber">
              <div className="inoutnametitle">
                Phone Number <img src={star} className="staricon" />
                <div>
                  <input className="inputDob" value={phoneNumber} onChange={ e => setphoneNumber(e.target.value)}/>
                </div>
                <hr className="line3" />
              </div>
              <select value={role} onChange={e => setrole(e.target.value)}>
                <option>--</option>
                {ListRole}
                </select>
            </div>
            <div>
              <div
                className="Cancelbtnuser"
                onClick={() => setCreatenmodel(false)}
              >
                <div>Cancel</div>
              </div>
              <div className="Createbtnuser">
                <div onClick={ManageCreacteUser}>Create</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModleManageCreateUser;
