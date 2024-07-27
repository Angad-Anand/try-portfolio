import React, { useEffect, useState } from "react";
import "./Header.scss";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

function Header() {
  const [HeaderActive, setHeaderActive] = useState(null);

  useEffect(() => {
    Splitting(); // Initialize Splitting.js after component mounts
  }, []);

  const handleItemClick = (index) => {
    setHeaderActive(index);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="home" className="nav_left">
          Angad
          <br />
          Anand
        </a>
        <div className="nav_right">
          <ul className="nav-list">
            {["home", "about", "resume", "portfolio", "contacts", "blog", "mode"].map((item, index) => (
              <li
                key={index}
                className={`nav-item shift-right ${HeaderActive === index ? "active" : ""}`}
                data-splitting
                onClick={() => handleItemClick(index)}
              >
                <a href={item}>{item.toUpperCase()}</a>
              </li>
            ))}
            <div className="Down">
              <button className="nav-item flip-3d cv" data-splitting>
                <a
                  href="https://drive.google.com/file/d/1X2fvYbQXV0IfARjo05kPnCV8SIrHryYT/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  DOWNLOAD CV
                </a>
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
