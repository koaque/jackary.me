import React from 'react';
import '../styles/styles.css';

const Dropdown = ({ title, items, isOpen, toggleDropdown }) => {
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          <span className="dropbtn-text">{title}</span>
        </button>
        <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
          {items.map((item, index) => (
            <a key={index} href={item.href}>{item.label}</a>
          ))}
        </div>
      </div>
    );
  };

export default Dropdown;