import React from "react";
import "./ModelRestore.css";
import close_icon from "../../../image/Icon-Login/close_icon.png";
import { Url } from "../../../Url/Url";

function ModelRestore({setRestoreUser , dataAc , setReload}) {

  const RestoreAc = () => {
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

    fetch(Url + `/api/FE001/EnableOrDisableUser?UserID=${dataAc}&EnableOrDisable=true`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(result)
        setReload(true)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
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
          <div className="Restorebtnuser" onClick={RestoreAc}>
            <div>Restore</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModelRestore;
