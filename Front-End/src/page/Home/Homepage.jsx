import React from "react";
import Slider from "../../sliderImage/Slider";
import "./Homepage.css";
import offeritem from "../../image/Sliderimg/diamond-island-ho-chi-minh-ritavo-4.jpg";
import SERVICES from "../../image/Sliderimg/can-ho-diamond-island-quan-2_1478861529.jpg";
import location from "../../image/Icon-Home/location.png";
import phonecall from "../../image/Icon-Home/phone-call.png";
import mail from "../../image/Icon-Home/mail.png";
import facebook from "../../image/Icon-Home/facebook.png";
import instagram from "../../image/Icon-Home/instagram.png";
import twitter from "../../image/Icon-Home/twitter.png";
import youtube from "../../image/Icon-Home/youtube.png";
import Navbar from '../../Navbar/Navbar'
function Homepage() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <div>
        <div className="title">SPECIAL OFFERS</div>
        <div className="offers">
          <div className="offer">
            <img src={offeritem} className="offerimg" />
            <div className="itemtitile">SPECIAL OFFERS</div>
          </div>
          <div className="offer">
            <img src={offeritem} className="offerimg" />
            <div className="itemtitile">SPECIAL OFFERS</div>
          </div>
          <div className="offer">
            <img src={offeritem} className="offerimg" />
            <div className="itemtitile">SPECIAL OFFERS</div>
          </div>
          <div className="offer">
            <img src={offeritem} className="offerimg" />
            <div className="itemtitile">SPECIAL OFFERS</div>
          </div>
        </div>
      </div>
      <div>
        <div className="title">FACILITIES & SERVICES</div>
        <div className="FACILITIES">
          <div className="SERVICES">
            <img src={SERVICES} className="SERVICESimg" />
            <div className="SERVICESitem">CONCIERGE</div>
          </div>
          <div>
            <div className="SERVICES1">
              <img src={SERVICES} className="SERVICESimg1" />
              <div className="SERVICESitem">CONCIERGE</div>
            </div>
            <div className="SERVICES1">
              <img src={SERVICES} className="SERVICESimg1" />
              <div className="SERVICESitem">CONCIERGE</div>
            </div>
            <div className="SERVICES1">
              <img src={SERVICES} className="SERVICESimg1" />
              <div className="SERVICESitem">CONCIERGE</div>
            </div>
            <div className="SERVICES1">
              <img src={SERVICES} className="SERVICESimg1" />
              <div className="SERVICESitem">CONCIERGE</div>
            </div>
          </div>
        </div>
        <div>
          <div className="title">ROOMS & RATES</div>
          <div className="room">
            <div className="roomitem">
              <img src={SERVICES} className="roomimg" />
              <h1 className="roomsite">KINGGG</h1>
              <h2 className="roomeria">Studio</h2>
              <h3 className="roomview">
                It is around 60m2 in size and has only one <br /> major area. It
                is appropriate for persons who <br /> need to be alone, such as
                students or <br />
                immigrants.
              </h3>
              <div className="checkbtn0">
              <button className="checkbtn">CHECK AVAILABILITY</button>
              </div>
            </div>
            <div className="roomitem1">
              <img src={SERVICES} className="roomimg" />
              <h1 className="roomsite">SUITEEEE</h1>
              <h2 className="roomeria">Shophouse</h2>
              <h3 className="roomview">
                It is luxuriously designed with 2 floors, highly <br />{" "}
                aesthetic and feng shui. With a shophouse <br /> apartment,...
              </h3>
              <div className="checkbtn0">
              <button className="checkbtn">CHECK AVAILABILITY</button>
              </div>
            </div>
            <div className="roomitem2">
              <img src={SERVICES} className="roomimg" />
              <h1 className="roomsite">TWINSSSS</h1>
              <h2 className="roomeria">Penthouse</h2>
              <h3 className="roomview">
                On the top floor of the structure, there is an <br /> open space
                with a view of the sky that has <br /> been expanded to fit a
                swimming pool, a resort, a <br /> garden,...
              </h3>
              <div className="checkbtn0">
              <button className="checkbtn">CHECK AVAILABILITY</button>
              </div>
            </div>
          </div>
          <hr className="line0" />
        </div>
      </div>
      <footer>
        <div className="fttitle">
          <div className="footertitle">
            <span>CONTACT DIA</span>
            <hr className="line1" />
          </div>
          <div className="footertitle1">
            <span>HELPFUL LINKS</span>
            <hr className="line1" />
          </div>
          <div className="footertitle2">
            <span>FOLLOW DIA</span>
            <hr className="line1" />
          </div>
        </div>
        <div className="footerif">
          <div className="infordt">
            <div>
              <img src={location} className="footerlogo1" />
              <span className="infor">A3 DIA, District 2, Ho Chi Minh</span>
            </div>
            <div>
              <img src={phonecall} className="footerlogo1" />
              <span className="infor">+84 123 456 789</span>
            </div>
            <div>
              <img src={mail} className="footerlogo1" />
              <span className="infor">diaapart@gmail.com</span>
            </div>
          </div>
          <div className="infordt1">
            <div className="infor1">
              <span className="infor">Recruitment</span>
            </div>
            <div className="infor1">
              <span className="infor">Customer Center</span>
            </div>
            <div className="infor1">
              <span className="infor">About DIA</span>
            </div>
          </div>
          <div className="infordt2">
            <img src={instagram} className="footerlogo2" />
            <img src={twitter} className="footerlogo2" />
            <img src={facebook} className="footerlogo2" />
            <img src={youtube} className="footerlogo2" />
          </div>
        </div>
        <div className="footerend">
          Copyright © 2022 diamondapartment.com. | Website was designed by Ohnim
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
