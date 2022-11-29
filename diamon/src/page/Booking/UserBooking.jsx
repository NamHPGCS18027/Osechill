import React, { useState, useEffect } from "react";
import "./UserBooking.css";
import { Url } from "../../Url/Url";
import error_icon from "../../image/Icon-Login/error_icon.png"

function UserBooking() {
  const [facilityid, setfacilityid] = useState("");
  const [datebooking, setdatebooking] = useState("");
  const [facilyti, setfacilyti] = useState([]);
  const [BookingUser, setBookingUser] = useState([]);
  const [reloading, setreloading] = useState(false)

  useEffect(() => {
    GetLookup();
    GetAllbooking();
  }, [reloading]);

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

    fetch(Url + "/api/FE004/GetAllFacility", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setfacilyti(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const GetAllbooking = () => {
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

    fetch(Url + "/api/FE004/GetMyBooking", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setBookingUser(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const Addbooking = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
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
        `/api/FE004/AddNewBookingTask?facilityID=${facilityid}&dateTimeOfBooking=${datebooking}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(result);
        setreloading(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const Deletebooking = (data) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "Bearer " + sessionStorage.getItem("accessToken")
    );

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(Url +`/api/FE004/RemoveBookingTask?bookingID=${data.id}`,requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        alert(result);
        setreloading(true);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const allfaci = facilyti.map((data) => (
    <option key={data.id} value={data.id}>
      {data.typeFacil} - {data.facilCode}
    </option>
  ));

  const Allbokinguser = BookingUser.map((data) => (
    <div className="Bookingdetail">
        <div className="bookingtital1">
          {data.userName} - {data.listFacil} <img src={error_icon} className="icondeletebooking" onClick={() => Deletebooking(data)}></img>
        </div>
        <div className="bookingdatetime">Data-Time : {data.dateAndTimeOfBooking}</div>
        
    </div>
  ));
  return (
    <div>
      <div>
        <div className="backgroundBooking">
          <h1 className="bookingService">Booking Service</h1>
          <div className="bookingcontainer">
            <div>Facility</div>
            <select
              value={facilityid}
              onChange={(e) => setfacilityid(e.target.value)}
            >
              <option>--</option>
              {allfaci}
            </select>
          </div>
          <div className="bookingcontainer">
            <div>Day-Time</div>
            <input
              type="datetime-local"
              placeholder="day time"
              value={datebooking}
              onChange={(e) => setdatebooking(e.target.value)}
            ></input>
          </div>
          <div className="btnaddbooking" onClick={Addbooking}>
            Add Booking
          </div>
        </div>
        <div className="backgroundBookingdetail">
        <div className="titalbooking">All Your Booking</div>
        {Allbokinguser}
        </div>
      </div>
    </div>
  );
}

export default UserBooking;
