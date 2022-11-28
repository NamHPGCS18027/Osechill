import React , {useState , useEffect} from 'react'
import './UserBooking.css'
import { Url } from '../../Url/Url'


function UserBooking() {
    const [facilityid, setfacilityid] = useState("")
    const [datebooking, setdatebooking] = useState('')
    const [facilyti, setfacilyti] = useState([])

    useEffect(() => {
        GetLookup()
    }, [])
    

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
            setfacilyti(result)
          })
          .catch((error) => {
            console.log("error", error);
          });
      }

    const Addbooking = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
            "Authorization",
            "Bearer " + sessionStorage.getItem("accessToken"));
       
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          redirect: "follow",
        };
    
        fetch(Url + `/api/FE004/AddNewBookingTask?facilityID=${facilityid}&dateTimeOfBooking=${datebooking}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(result);
            alert(result)
            setreload(true)
          })
          .catch((error) => {
            console.log("error", error);
          });
      };

      const allfaci =facilyti.map((data) =>(
        <option key={data.id} value={data.id}>{data.typeFacil} - {data.facilCode}</option>
      ))
  return (
    <div>
        <div className='backgroundBooking'>
            <h1 className='bookingService'>Booking Service</h1>
        <div className='bookingcontainer'>
            <div>Facility</div>
            <select value={facilityid} onChange={e => setfacilityid(e.target.value)}>
                <option>--</option>
                {allfaci}
            </select>
        </div>
        <div className='bookingcontainer'>
            <div>Day-Time</div>
            <input type="datetime-local" placeholder='day time' value={datebooking} onChange={e => setdatebooking(e.target.value)}></input>
        </div>
        <div className='btnaddbooking' onClick={Addbooking}>
            Add Booking
        </div>
        </div>
    </div>
  )
}

export default UserBooking