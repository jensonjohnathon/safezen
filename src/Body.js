import React from "react";
import "./Body.css";
import arrow from "./arrow.png";

function Body() {
  return (
    <div className="BodyDiv">
      <p id="MainText">
        world's first innovative peer to peer insurance
        <br></br>
        coverages to protect you from uncertain future risks
      </p>
      <br></br>
      <p id="UnderText">
        zero-premium risk coverage to pay-as-you-go insurance
        <br></br>
        we have got you all covered
      </p>
      <br></br>
      <br></br>
      <button id="GetSZ">
        Get SafeZen Insured Now <img src={arrow} alt="Arrow" id="arrow" />
      </button>
    </div>
  );
}

export default Body;
