import React from "react";
import "./ModelRestore.css";
import close_icon from "../../../image/Icon-Login/close_icon.png";

function ModelRestore({setRestoreUser}) {
  return (
    <div className="modalBackgroundRestore">
      <div className="modalContainerRestore">
        <div>
          <img src={close_icon} className="closemodelRestore" onClick={() => setRestoreUser(false)}/>
        </div>
        <div className="restoreTitle1">Restore selected employee</div>
        <div className="restoreTitle2">
          The selected employee(s) will be restored to the employees tab.
        </div>
        <div>
          <div className="CancelRestorebtnuser" onClick={() => setRestoreUser(false)}>
            <div>Cancel</div>
          </div>
          <div className="Restorebtnuser">
            <div>Restore</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelRestore;
