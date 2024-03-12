import * as React from "react";
import { useState, useEffect } from "react"
import Dropdown, { toggleDropdown } from "../components/dropdown";
import "../styles/styles.css";

const socialItems = [
  { label: 'Facebook', href: '#facebook' },
  { label: 'Twitter', href: '#twitter' },
  { label: 'Instagram', href: '#instagram' },
];

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  
  return (
    <>
      <header className="header">Jackary</header>
      <main className="main">
        <ul className="lists">
          <li className="listItem">
            <Dropdown title="Social Media" items={socialItems} isOpen={isOpen} toggleDropdown={toggleDropdown} />
            <span className="dropbtn-arrow" onClick={toggleDropdown}>&#9662;</span>
          </li>
          <li className="listItem">
            <button className="link">
              <span className="iconPlaceholder"></span> {/* Placeholder for icon */}
              Trading Bot Translator
            </button>
          </li>
          <li className="listItem">
            <button className="link">
              <span className="iconPlaceholder"></span> {/* Placeholder for icon */}
              Soundrr - Discord Music Bot
            </button>
          </li>
          {/* Add a fourth list item as needed */}
        </ul>
      </main>
      <footer className="footer"></footer>
    </>
  );
};

export default IndexPage;