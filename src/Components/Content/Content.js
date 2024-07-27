import React from "react";
import "./Content.scss";
import Typewriter from "typewriter-effect";

function Content() {
  return (
    <div className="container_right">
      <div className="top">
        <div className="Big_name box">Angad <span class="fancy">Anand</span>.</div>
        <div className="intro box">
          <div className="text_intro">
            <div className="type">
              <Typewriter
                options={{
                  strings: ["PROGRAMMER", "WEB DEVELOPER", "WEB DESIGNER"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className="text">
              Hello! I am Web Developer from India. I have rich experience in
              web site design and building, also I am good at wordpress. I love
              to talk with you about our unique.
            </div>
          </div>
        </div>
        <div className="Contact_me box">
          <button className="flip-3d" data-splitting>
            CONTACT ME
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
