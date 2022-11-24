import React , {useState} from 'react'
import "./AccountUser.css";
import iconSearch from "../../image/Issues List v1/icon_Search.png";
import filter from "../../image/Icon v3/filter.png";
import sort from "../../image/Icon v3/sort.png";
import recyclebin from "../../image/Icon v3/recycle-bin.png";
import ModleManageCreateUser from "./CreateUser/ModleManageCreateUser";
import ManageFilter from './ShowFilter/ManageFilter';
import { Link } from "react-router-dom";
import ModelViewContact from './ContectUser/ModelViewContact';

function ManageListUser() {
    const [Createnmodel, setCreatenmodel] = useState(false);
    const [Filtermodel, setFiltermodel] = useState(false);
    const [ViewContact, setViewContact] = useState(false)
    return (
      <div>
        {Createnmodel && (
              <ModleManageCreateUser setCreatenmodel={setCreatenmodel}/>
            )}
        {Filtermodel && <ManageFilter setFiltermodel={setFiltermodel} />}
        {ViewContact && (
          <ModelViewContact setViewContact={setViewContact}/>
        )}
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
          <tr>
            <td>
              <span className="nameAc">Jennie Kim</span>
            </td>
            <td>25</td>
            <td>0123456789</td>
            <td>jenniekim@gmail.com</td>
            <td>Block's manager - A</td>
            <td>
              <img src={recyclebin} className="iconrecyclebin" />
            </td>
          </tr>
          <tr>
            <td>
              <span className="nameAc">Roseanne Park </span>
            </td>
            <td>26</td>
            <td>0123456789</td>
            <td>rosepark@gmail.com</td>
            <td>Block's manager - B</td>
            <td>
              <img src={recyclebin} className="iconrecyclebin" />
            </td>
          </tr>
          <tr>
            <td>
              <span className="nameAc">Shawn Peter Raul Mendes</span>
            </td>
            <td>35</td>
            <td>0123456789</td>
            <td>shawnmendes@gmail.com</td>
            <td>Staff - Booking Team</td>
            <td>
              <img src={recyclebin} className="iconrecyclebin" />
            </td>
          </tr>
          <tr>
            <td>
              <span className="nameAc">Taylor Alison Swift </span>
            </td>
            <td>40</td>
            <td>0123456789</td>
            <td>taylorswift@gmail.com</td>
            <td>Staff - Service Team</td>
            <td>
              <img src={recyclebin} className="iconrecyclebin" />
            </td>
          </tr>
        </table>
      </div>
    );
}

export default ManageListUser