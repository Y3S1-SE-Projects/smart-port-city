/*
    This is the portal where the user chooses which function or service they want to use
*/

import React from "react";
import { Link } from "react-router-dom";
import FacilitiesBox from "./FacilitiesBox";
import Footer from "../components/Footer";

// Images
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";
import featureimage3 from "../images/feature_4.png";
import featureimage4 from "../images/feature_5.png";
import featureimage5 from "../images/feature_6.png";
import featureimage6 from "../images/feature_7.png";
import featureimage7 from "../images/feature_8.png";

function Facilities() {
  return (
    <>
      <div id="features">
        <div className="z-container">
          <div className="a-container">
            <FacilitiesBox image={featureimage} title="Sports Entertainment" />
            <button className="sports">
              {" "}
              <Link to="/sports">CICK ME</Link>{" "}
            </button>
            <FacilitiesBox image={featureimage1} title="Restaurant" />
            <button className="restaurant">
              {" "}
              <Link to="/restaurant">CICK ME</Link>{" "}
            </button>
            <FacilitiesBox image={featureimage2} title="Cinema" />
            <button className="cinema">
              {" "}
              <Link to="/cinema">CICK ME</Link>{" "}
            </button>
          </div>
          <div className="a-container">
            <FacilitiesBox image={featureimage3} title="Banking System" />
            <button className="banking">
              {" "}
              <Link to="/banking">CICK ME</Link>{" "}
            </button>
            <FacilitiesBox image={featureimage4} title="Theme Park" />
            <button className="theme">
              {" "}
              <Link to="/theme">CICK ME</Link>{" "}
            </button>
            <FacilitiesBox image={featureimage5} title="Hotel Management" />
            <button className="hotel">
              {" "}
              <Link to="/hotel">CICK ME</Link>{" "}
            </button>
          </div>
          <div className="a-container">
            <FacilitiesBox image={featureimage6} title="Health Care" />
            <button className="health">
              {" "}
              <Link to="/health">CICK ME</Link>{" "}
            </button>
            <FacilitiesBox image={featureimage7} title="Gym Management" />
            <button className="gym">
              {" "}
              <Link to="/gym">CICK ME</Link>{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Facilities;
