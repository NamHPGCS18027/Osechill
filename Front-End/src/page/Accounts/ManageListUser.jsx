import React, { useState } from "react";
import "./AccountUser.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import filter from "../../image/Icon v3/filter.png";
import sort from "../../image/Icon v3/sort.png";
import recyclebin from "../../image/Icon v3/recycle-bin.png";
import ModleManageCreateUser from "./CreateUser/ModleManageCreateUser";
import ManageFilter from "./ShowFilter/ManageFilter";
import { Link } from "react-router-dom";
import ModelViewContact from "./ContectUser/ModelViewContact";
import { Url } from "../../Url/Url";
import { useEffect } from "react";

function ManageListUser() {
  const [Createnmodel, setCreatenmodel] = useState(false);
  const [Filtermodel, setFiltermodel] = useState(false);
  const [ViewContact, setViewContact] = useState(false);
  const token = sessionStorage.getItem("accessToken");
  const [AcoundDetail, setAcoundDetail] = useState([]);
  const [Reload, setReload] = useState(false);

  useEffect(() => {
    GetAllAc();
  }, [token, Reload]);

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
        setAcoundDetail(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const DeleteAc = (data) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      Url +
        `/api/FE001/EnableOrDisableUser?UserID=${data.id}&EnableOrDisable=false`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(result);
        setReload(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const ListUserAc = AcoundDetail.map((data) => (
    <tr>
      <td>
        <span className="nameAc">{data.userName}</span>
      </td>
      <td>{data.age}</td>
      <td>{data.phoneNumber}</td>
      <td>{data.email}</td>
      <td>{data.roleName}</td>
      <td>
        <img
          src={recyclebin}
          className="iconrecyclebin"
          onClick={() => DeleteAc(data)}
        />
      </td>
    </tr>
  ));
  return (
    <div>
      {Createnmodel && (
        <ModleManageCreateUser setCreatenmodel={setCreatenmodel} />
      )}
      {Filtermodel && <ManageFilter setFiltermodel={setFiltermodel} />}
      {ViewContact && <ModelViewContact setViewContact={setViewContact} />}
      {/* header Accounts */}
      <div className="headerAc">
        <div className="AcHead">
          <Link to="/Manage_Accounts">
            <div className="Headitem1">Employees</div>
          </Link>
        </div>
        <div className="AcHead">
          <Link to="/Manage_Deleted_employees">
            <div className="Headitem">Deleted employees</div>
          </Link>
        </div>
      </div>
      {/* body Accounts */}
      <div className="Acoutsbody">
        {/* header body Accounts */}
        <div className="bodyheadAc">
          {/* seach Accounts */}
          <div className="seachAc">
            <img src={iconSearch} className="iconAcL" />
            <input
              className="inputAc"
              placeholder="Employee Name / Phone number"
            />
            <hr className="line2" />
            <div className="shownumber">Showing 4 out of 4 employees</div>
          </div>
          <div className="btnfilter" onClick={() => setFiltermodel(true)}>
            <img src={filter} className="iconfilter" />
            <div className="filtertitle">Show filter</div>
          </div>
          {/* create Accounts */}
          <div className="creatAc" onClick={() => setViewContact(true)}>
            View All contract
          </div>
          <div className="creatAc" onClick={() => setCreatenmodel(true)}>
            Create employee
          </div>
        </div>
      </div>
      {/* table Accounts */}
      <table>
        <tr>
          <th>
            <span className="nameAc">Employee Name </span>
            <img src={sort} className="iconsort" />
          </th>
          <th>
            Age <img src={sort} className="iconsort" />
          </th>
          <th>
            Phone <img src={sort} className="iconsort" />
          </th>
          <th>
            Email <img src={sort} className="iconsort" />
          </th>
          <th>
            Role <img src={sort} className="iconsort" />
          </th>
          <th />
        </tr>
       {ListUserAc}
      </table>
    </div>
  );
}

export default ManageListUser;
