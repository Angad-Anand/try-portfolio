import React, { useState } from "react";
import "./Portfolio.scss";
import Portfolio_cards from "./Portfolio_cards.json";
function Portfolio() {
  const [activeSection, setActiveSection] = useState("All");
  const [transitioning, setTransitioning] = useState(false);

  const sections = [
    "All",
    "Video",
    "Music",
    "Links",
    "Image",
    "Gallery",
    "Content",
  ];

  const handleSectionClick = (section) => {
    if (section === activeSection) return;

    setActiveSection(section);
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, 400); // Duration should match the CSS transition duration
  };
  const filteredItems =
    activeSection === "All"
      ? Portfolio_cards.cards
      : Portfolio_cards.cards.filter((card) => card.type === activeSection);

  return (
    <div className="container">
      <div className="section-title" style={{ outline: "none" }}>
        Portfolio
      </div>
      <div className="section-subtitle">LATEST WORKS</div>
      <div className="albums">
        {sections.map((section) => (
          <div
            key={section}
            className={activeSection === section ? "active" : ""}
            onClick={() => handleSectionClick(section)}
          >
            {section}
          </div>
        ))}
      </div>
      <div className={`items ${transitioning ? "transitioning" : ""}`}>
        {filteredItems.map((card, i) => (
          <div key={i} className="album_card">
            <div className="card_content">
              <div className="info">
                <div className="card_desc">{card.description}</div>
                <img src={card.img} alt={card.title} />
              </div>
              <div className="card_section">{card.type}</div>
              <div className="card_title">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
