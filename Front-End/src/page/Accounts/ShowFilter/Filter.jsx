import React from "react";
import "./Filter.css";
import icon_Close from "../../../image/Icon v3/icon_Close.png";

function Filter({setFiltermodel}) {
  return (
    <div className="modalBackgroundfilter">
      <div className="modalContainerfilter">
        <div>
          <img src={icon_Close} className="closeFilter" onClick={() => setFiltermodel(false)} />
        </div>
        {/* filterAge */}
        <div className="filterAge">
          <div className="titlefilter">Age</div>
          <div className="searchfilter">
            <div>
              <button className="btnFilter">18 - 29</button>
              <button className="btnFilter">30 - 40</button>
            </div>
            <div>
              <button className="btnFilter">41 - 50</button>
              <button className="btnFilter">51 - 60</button>
            </div>
          </div>
        </div>
        {/* filterGender */}
        <div className="filterGender">
          <div className="titlefilter">Grender</div>
          <div className="searchfilter">
            <button className="btnFilter">Male</button>
            <button className="btnFilter">Female</button>
          </div>
        </div>
        {/* filterRole */}
        <div className="filterRole">
          <div className="titlefilter">Role</div>
          <div className="searchfilter">
            <div>
              <button className="btnFilterRole">Block’s manager</button>
            </div>
            <div>
              <button className="btnFilterRole">Booking team</button>
            </div>
            <div>
              <button className="btnFilterRole">Service team</button>
            </div>
          </div>
        </div>
        <div className="searchbtnfilter">
          <div className="Cancelbtnfilter">
            <div>Reset</div>
          </div>
          <div className="Createbtnfilter">
            <div>Show results</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
