import React from "react";
import "./info.css";
import info1 from "./info1.png";
import info2 from "./info2.png";
import info3 from "./info3.png";
import step1 from "./step1.png";
import step2 from "./step2.png";
import symptom from "./symptom.jpg";
import corona from "./corona.png";

function Info() {
  return (
    <div className="info">
      <div className="info-head">
        <h1>How coronavirus spread</h1>
        <p>
          The corona virus known as COVID-19 spreads from person to person in
          close proximi ty similiar to other respiratory illness, such as the
          flue
        </p>
      </div>

      <div className="info-card">
        <div className="card">
          <img src={info1} alt="" />
          <h2>Air transmission by cough or sneeze</h2>
          <p>
            In droplet form ,the corona virus is airbourne for a few seconds
            after someone sneezes or cougns
          </p>
        </div>
        <div className="card">
          <img src={info2} alt="" />
          <h2>Contaminated objects</h2>
          <p>
            In droplet form ,the corona virus is airbourne for a few seconds
            after someone sneezes or cougns
          </p>
        </div>
        <div className="card">
          <img src={info3} alt="" />
          <h2>Transmission among humans</h2>
          <p>
            In droplet form ,the corona virus is airbourne for a few seconds
            after someone sneezes or cougns
          </p>
        </div>
      </div>

      <div className="symptoms">
        <div className="left-symptom">
          <div className="imageholder">
            <img src={symptom} alt="" />
          </div>
        </div>

        <div className="right-symptom">
          <h1>symptoms of coronavirus</h1>
          <p>
            The COVID-19 virus spreads primarly through droplets of sollva or
            discharge from the nose when on Infected person coughs or sneezes,
            so ies important thot you also practice respiratory etiquette (by
            coughing into a flexed elbow)
          </p>

          <div className="fever">
            <div className="feverimgholder">
              <img src={corona} alt="" />
            </div>

            <p>Fever</p>
          </div>

          <div className="fever">
            <div className="feverimgholder">
              <img src={corona} alt="" />
            </div>

            <p>Runny nose</p>
          </div>

          <div className="fever">
            <div className="feverimgholder">
              <img src={corona} alt="" />
            </div>

            <p>Throat pain</p>
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-head">
          <h1>Two steps you should do for coronavirus</h1>
        </div>

        <div className="fullgrid">
          <div className="step-grid">
            <div className="step-image">
              <img src={step1} alt="" />
            </div>
            <div className="step-quote">
              <h1>Work at home</h1>
              <p>
                A report on how the pandemic has affected people's willingness
                to come back to office has revealed that a whopping 71 percent
                of respondents would rather work from home than get a promotion!
              </p>
            </div>{" "}
            <div className="step-quote">
              <h1>Avoid Hangout</h1>
              <p>
                A report on how the pandemic has affected people's willingness
                to come back to office has revealed that a whopping 71 percent
                of respondents would rather work from home than get a promotion!
              </p>
            </div>
            <div>
              <img src={step2} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h1>Medico</h1>

        <div className="footer-link">
          <p>Symptoms</p>
          <p>Treatment</p>
          <p>Doctor</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
