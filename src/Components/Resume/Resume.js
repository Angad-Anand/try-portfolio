import React, { useState, useRef, useEffect } from "react";
import "./Resume.scss";
import Cards_experience from "./experience.json";
import Cards_education from "./education.json";
import Cards_design_skills from "./Design_skills.json";
import Cards_code_skills from "./Code_skills.json";
import ProgressBar from "./ProgressBar/ProgressBar";

function Resume() {
  //horizontal scroll
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);
  // const [disableRight, setDisableRight] = useState(false);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
        updateArrowsState();
      }
    }, speed);
  };

  const updateArrowsState = () => {
    if (elementRef.current) {
      setArrowDisable(elementRef.current.scrollLeft === 0);
    }
  };

  useEffect(() => {
    updateArrowsState();
  }, []);
  return (
    <div className="container">
      <section className="section">
        <div className="section-title">Experience</div>
        <div className="section-subtitle">WORKING/WORKED WITH</div>
        <div className="button-container">
          <button
            className="flip-3d"
            data-splitting
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 210, -10);
            }}
            disabled={arrowDisable}
          >
            Left
          </button>
          <button
            className="flip-3d"
            data-splitting
            onClick={() => {
              handleHorizantalScroll(elementRef.current, 25, 100, 10);
            }}
          >
            Right
          </button>
        </div>
        <div className="cards" ref={elementRef}>
          {Cards_experience.cards.map((card, i) => (
            <div key={i} className="card">
              <div className="date">{card.date}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-description">{card.description}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-title">Education</div>
        <div className="section-subtitle">STUDIED AT</div>
        <div className="cards education">
          {Cards_education.cards.map((card, index) => (
            <div className="card">
              <div className="date">{card.date}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-title">Design Skills</div>
        <div className="section-subtitle">CREATIVE ABILITY</div>
        <div className="skill_cards">
          {Cards_design_skills.cards.map((skill_list, i) => (
            <div key={i} className="skill_card">
              <div className="skill_card_title">{skill_list.title}</div>
              <div className="skill_card_description">
                {skill_list.description}
              </div>
              <div className="skill_card_percentage">
                {skill_list.percentage}%
              </div>
              <progress value={skill_list.percentage} max="100" />
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-title" style={{ marginTop: "100px" }}>
          Coding Skills
        </div>
        <div className="section-subtitle">DEVELOPING ON</div>
        <div className="skill_cards coding">
          {Cards_code_skills.cards.map((code_list, i) => (
            <div key={i} className="skill_card">
              <ProgressBar percentage={code_list.percentage} />
              {/* <div className="code_card_percentage">
                  {code_list.percentage}%
                </div> 
                <progress value={code_list.percentage} max="100">
                <div className="skill_card_percentage">
                  {code_list.percentage}
                </div> </progress> */}
              <div className="skill_card_title">{code_list.title}</div>
              <div className="skill_card_description">
                {code_list.description}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;
