import React from 'react';
import '../styles/styles.css';

const ToggleTooltip = () => {
    const [isTooltipVisible, setTooltipVisible] = React.useState(false);
    let pressTimer;
  
    const handleMouseDown = () => {
      // Start the timer on mouse down
      pressTimer = window.setTimeout(() => {
        setTooltipVisible(true);
      }, 500);
    }
  
    const handleMouseUp = () => {
      clearTimeout(pressTimer);
      setTooltipVisible(false);
    }
  
    return (
      <div className="tooltip-container">
        <button 
          className="tooltip-button"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
        >
          Hover or long press me
        </button>
        {isTooltipVisible && <div className="tooltip-text">This is a tooltip</div>}
      </div>
    );
  }
export default ToggleTooltip;