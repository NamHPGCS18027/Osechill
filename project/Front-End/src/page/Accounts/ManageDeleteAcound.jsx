import React , {useState} from 'react';
import "./AccountUser.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import sort from "../../image/Icon v3/sort.png";
import restore from "../../image/Icon-v4/restore.png";
import ModelRestore from "./RestoreUser/ModelRestore";
import { Link } from "react-router-dom";
import { Url } from '../../Url/Url';
import { useEffect } from 'react';

function ManageDeleteAcound() {
    const [RestoreUser, setRestoreUser] = useState(false);
    const [AcoundDetaild, setAcoundDetaild] = useState([])
  const token = sessionStorage.getItem("accessToken");
  const [Reload, setReload] = useState(false)
  const [dataAc, setdataAc] = useState('')

  useEffect(() => {
    GetAllAc();
  }, [token , Reload]);

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

    fetch(Url + `/api/FE001/GetAllUser?getActive=${false}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAcoundDetaild(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handlerestore = (data) =>{
    setRestoreUser(true)
    setdataAc(data.id)
  }


  const ListUserAcD = AcoundDetaild.map( (data) => (
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
              src={restore}
              className="iconrestore"
              onClick={() => handlerestore(data)}
            />
      </td>
    </tr>
));
    return (
      <div>
        {RestoreUser && <ModelRestore setRestoreUser={setRestoreUser} setReload={setReload} dataAc={dataAc}/>}
        {/* header Accounts */}
        <div className="headerAc">
          <div className="AcHead">
            <Link to="/Manage_Accounts">
              <div className="Headitem">Employees</div>
            </Link>
          </div>
          <div className="AcHead">
            <Link to="/Manage_Deleted_employees">
              <div className="Headitem1">Deleted employees</div>
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
            </div>
            <div className="shownumberEmploy">Showing 4 out of 4 employees</div>
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
          {ListUserAcD}
        </table>
      </div>
    );
}

export default ManageDeleteAcound