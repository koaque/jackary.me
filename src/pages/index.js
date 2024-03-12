import * as React from "react";
import { useState, useEffect } from "react"
import Dropdown, { toggleDropdown } from "../components/dropdown";
import Tooltip, { ToggleTooltip } from "../components/tooltip";
import "../styles/styles.css";

const socialItems = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'Instagram', href: '#instagram' },
];

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [isTooltipVisible, setTooltipVisible] = React.useState(false);
  
  return (
    <>
      <header className="header">
        <h1 className="headerText">Jackary</h1>
      </header>
      <main className="main">
        <ul className="lists">
          <li className="listItem">
            <Dropdown title="Channels & Socials" items={socialItems} isOpen={isOpen} toggleDropdown={toggleDropdown} />
            <span className="dropbtn-arrow" onClick={toggleDropdown}>&#9662;</span>
          </li>
          <li className="listItem">
            <button className="link">
              <span className="iconPlaceholder"></span> {/* Placeholder for icon */}
              Trading API Translator
            </button>
            <div className="tooltip-container">
              <button className="tooltip-button" ToggleTooltip={setTooltipVisible}>Hover over me</button>
              <div className="tooltip-text">This is a tooltip placeholder</div>
            </div>
          </li>
          <li className="listItem">
            <button className="link">
              <span className="iconPlaceholder"></span> {/* Placeholder for icon */}
              Soundrr - Discord Music Bot
            </button>
          </li>
          <li className="listItem">
            <button className="link">
              <span className="iconPlaceholder"></span> {/* Placeholder for icon */}
              AI LocalHoster - Utilize AIs in things that request Base Urls
            </button>
          </li>
        </ul>
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default IndexPage;