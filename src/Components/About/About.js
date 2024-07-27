import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="container">
      <div className="section-title" style={{outline: "none"}}>About Me</div>
      <div className="section-subtitle">MY STORY</div>
      <div className="content">
        Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus
        feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
        lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed
        cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
        sagittis lacus.
        <br /><br />
        Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus
        feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
        lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
      </div>
      <div className="details">
        <div>
          <div className="detail">Age:</div>{" "}
          <div className="detail_answer">21</div>
        </div>
        <div>
          <div className="detail">Residence:</div>{" "}
          <div className="detail_answer">India</div>
        </div>
        <div>
          <div className="detail">Freelance:</div>{" "}
          <div className="detail_answer">Available</div>
        </div>
        <div>
          <div className="detail">Address:</div>{" "}
          <div className="detail_answer">Bokaro Steel City</div>
        </div>
        <div>
          <div className="detail">Phone:</div>{" "}
          <div className="detail_answer">+91 9939178265</div>
        </div>
        <div>
          <div className="detail">E-mail:</div>{" "}
          <div className="detail_answer">angadanandishu@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default About;
