import React , {useState , useEffect} from "react";
import "./ModelCreateContact.css";
import iconClosepopup from "../../../image/Icon v3/icon_Close_popup.png";
import star from "../../../image/Icon v3/star.png";
import Select from "react-select";
import { Url } from "../../../Url/Url";

function ModelCreatContect({ setCreateContact }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const [RedcidenAc, setRedcidenAc] = useState([])
  const [startDate, setstartDate] = useState("")
  const [residentID, setresidentID] = useState("")
  const [endDate, setendDate] = useState("")
  const [lastSignedDate, setlastSignedDate] = useState("")
  const [AllBlock, setAllBlock] = useState([]);
  const [AllApartment, setAllApartment] = useState([])
  const [roleid, setroleid] = useState('')

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

  useEffect(() => {
    GetAllAc()
    GetAllBlock()
  }, [])
  
  const GetAllAc = () => {
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

    fetch(Url + `/api/FE001/GetAllUser?getActive=${true}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setRedcidenAc(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const filterTaskAcound = RedcidenAc.filter(function (RedcidenAc) {
    return RedcidenAc.roleName[0] === "resident";
  });

  const FilterSelect = selectedOption.map(function (option){
    return option.value;
  });

  const AllManage = filterTaskAcound.map((data) => (
    <option key={data.id} value={data.id}>
      {data.userName} - {data.roleName}
    </option>
  ));

  const GetAllBlock = () => {
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

    fetch(Url + "/api/Block/GetAllBlock", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllBlock(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const BlockList = AllBlock.map((data) =>(
    <option key={data.blockId} value={data.blockId}>{data.blockName}</option>
  ))

  const CreacteContactUser = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken"))

    var raw = JSON.stringify({
      listApartmentID: FilterSelect,
      residentID:residentID,
      startDate:startDate,
      endDate:endDate,
      lastSignedDate:lastSignedDate
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(Url+"/api/Contract/AddNewContract", requestOptions)
      .then((response) => {
        response.text();
      })
      .then((result) => {
        console.log(result);
        alert(result)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const GetAllApartment = () => {
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

    fetch(Url + `/api/Apartment/GetAllApartmentInBlock?blockId=${roleid}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllApartment(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const options = AllApartment.map((data) => (
    { value: data.apartmentId, label: data.apartmentName }
  ))
  return (
    <div className="BackGroundResident">
      <div className="modalContainerCreate">
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
          <select
            className="inputContacts"
            placeholder="Input Full Name"
            value={residentID}
            onChange={e => setresidentID(e.target.value)}
          >
            <option>--</option>
            {AllManage}</select>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Start Date 
            <img src={star} className="staricon" /> :
          </div>
          <input type="datetime-local" className="inputContacts"  value={startDate} onChange={e => setstartDate(e.target.value)}></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            End Date
            <img src={star} className="staricon" /> :
          </div>
          <input
            type="datetime-local"
            className="inputContacts"
            placeholder="Day Start Contract"
            value={endDate}
            onChange={e => setendDate(e.target.value)}
          ></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Last Signed Date 
            <img src={star} className="staricon" /> :
          </div>
          <input
            type="datetime-local"
            className="inputContacts"
            placeholder="Day End Contract"
            value={lastSignedDate}
            onChange={e => setlastSignedDate(e.target.value)}
          ></input>
          <hr className="linecontact" />
        </div>
        <div className="backgroundInputContacts">
          <div className="TitleContacts">
            Block
            <img src={star} className="staricon" /> :
          </div>
          <select
            className="inputContactsBlock"
            value={roleid}
            onChange={e => setroleid(e.target.value)}
          >
            <option>--</option>
            {BlockList}
          </select>
          <button className="btnblock" onClick={GetAllApartment}>Seach Apartment</button>
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
            <div onClick={CreacteContactUser}>Create</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ModelCreatContect;
