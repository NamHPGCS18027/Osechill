import React,{useState} from "react";
import "./Navbar.css";
import logoHome from "../image/Icon-Home/logo.png";
import smartphone from "../image/Icon-Home/smartphone.png";
import Modellogin from "../page/login/Modellogin";

function Navbar() {
  const [loginmodel,setloginmodel] = useState(false)
  
  return (
    <div>
      <div>
        <span className="ENGLISH">ENGLISH </span>
        <span className="VIETNAMESE"> VIETNAMESE</span>
      </div>
      <div>
        <img src={logoHome} alt="home logo" className="homelogo" />
        <span className="logotext">
          DIAMOND <br />
          APARTMENT
        </span>
      </div>
      <div>
        <span className="signin" onClick={()=> setloginmodel(true)}>SIGN IN</span>
        <span className="VIRTUAL">VIRTUAL TOUR 360</span>
        <span className="story">OUR STORY</span>
        <span className="line">|</span>
      </div>

      <div>
        <img src={smartphone} alt="smartphone" className="smartphone" />
        <span className="smartphonetext">APP <br/> DOWN</span>
      </div>
      {loginmodel && <Modellogin setloginmodel={setloginmodel}/>}
    </div>
  );
}

export default Navbar;
