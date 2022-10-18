import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.png";
import featureimage1 from "../images/feature_2.png";
import featureimage2 from "../images/feature_3.png";
import featureimage3 from "../images/feature_4.png";
import featureimage4 from "../images/feature_5.png";
import featureimage5 from "../images/feature_6.png";
import featureimage6 from "../images/feature_7.png";
import featureimage7 from "../images/feature_8.png";

function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureimage} title="Sports Entertainment" />
        <FeatureBox image={featureimage1} title="Restaurant" />
        <FeatureBox image={featureimage2} title="Cinema" />
      </div>
      <div className="a-container">
        <FeatureBox image={featureimage3} title="Banking System" />
        <FeatureBox image={featureimage4} title="Theme Park" />
        <FeatureBox image={featureimage5} title="Hotel Management" />
      </div>
      <div className="a-container">
        <FeatureBox image={featureimage6} title="Health Care" />
        <FeatureBox image={featureimage7} title="Gym Management" />
      </div>
    </div>
  );
}

export default Feature;
