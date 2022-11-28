import React , {useState , useEffect} from 'react'
import sort from "../../../image/Icon v3/sort.png";
import { Url } from '../../../Url/Url';

function ContactsUnAvilable() {
  const [AllContract, setAllContract] = useState([])

  useEffect(() => {
    GetAllContract()
  }, [])
  
  const GetAllContract = () => {
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

    fetch(Url + "/api/Contract/GetAllContractOfResident", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAllContract(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const MapContract = AllContract.map(({userName,startDate,endDate,modifiedDate}) =>(
    <tr>
          <td>
            <span className="nameAc">{userName}</span>
          </td>
          <td>{startDate}</td>
          <td>{endDate}</td>
          <td>{endDate}</td>
          <td>{modifiedDate}</td>
        </tr>
  ))
  return (
    <div>
      <table>
        <tr>
          <th>
            <span className="nameAc">Full Name </span>
            <img src={sort} className="iconsort" />
          </th>
          <th>
            Day Start <img src={sort} className="iconsort" />
          </th>
          <th>
            Day End <img src={sort} className="iconsort" />
          </th>
          <th>
          Last Signed Date <img src={sort} className="iconsort" />
          </th>
          <th>
          ModifiedDate <img src={sort} className="iconsort" />
          </th>
          <th />
        </tr>
        {MapContract}
      </table>
    </div>
  )
}

export default ContactsUnAvilable