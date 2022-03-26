import React from "react";
import "./banner.css";
import playvideo from "../playvid.png";
import bannerimg from "./banner.png";
function Banner() {
  return (
    <div className="banner">
      <div className="left-banner">
        <div className="leftimg">
          <img src={bannerimg} alt="" />
        </div>
      </div>

      <div className="right-banner">
        <h4>Covid-19</h4>
        <h1>#StayHome</h1>
        <h1>#StaySafe</h1>

        <p>
          corona virus disease (Covid-19) is an infecting disease caused by a
          newly discovered corona virus.
        </p>

        <div className="banner-buttons">
          <div className="button1">
            <button>Learn more</button>
          </div>

          <div className="playvideo">
            <img src={playvideo} alt="" />
            <p>Play Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
