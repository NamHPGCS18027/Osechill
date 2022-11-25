import React from "react";
import icon_Close from "../../image/Icon v3/icon_Close.png";

function ModleTaskFilter({ setTaskFilter }) {
  return (
    <div className="modalBackgroundfilter">
      <div className="modalContainerfilter">
        <div>
          <img
            src={icon_Close}
            className="closeFilter"
            onClick={() => setTaskFilter(false)}
          />
        </div>
        {/* Status */}
        <div className="filterAge">
          <div className="titlefilter">Status</div>
          <div className="searchfilter">
            <div>
              <button className="btnFilter">New</button>
              <button className="btnFilter">In Progress</button>
            </div>
            <div>
              <button className="btnFilter">Done</button>
              <button className="btnFilter">Pending Review</button>
            </div>
          </div>
        </div>
        {/* Priority */}
        <div className="filterRole">
          <div className="titlefilter">Priority</div>
          <div className="searchfilter">
            <div>
              <button className="btnFilter">Low</button>
              <button className="btnFilter">Lowest</button>
            </div>
            <div>
              <button className="btnFilter">High</button>
              <button className="btnFilter">Highest</button>
            </div>
            <div>
              <button className="btnFilter">Medium</button>
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

export default ModleTaskFilter;
