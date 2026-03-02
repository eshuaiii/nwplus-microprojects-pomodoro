// Import statements
import "./Timer.css";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";

export default function Timer() {
  // Helper function to format time
  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  //Render the Timer component
  return (
    <div className="timer-page">
      <div className="timer-wrapper">
        <div className="timer-layout">
          <div className="timer-controls">
            {/* These are icons imported from react-icons library */}
            <IoIosPause className="icon-btn" />
            <VscDebugRestart className="icon-btn" />
          </div>
          {/* Study button group */}
          <div className="timer-main">
            <div className="duration-group">
              <h3>Start studying</h3>
              <button className="duration-btn">30 mins</button>
              <button className="duration-btn">45 mins</button>
              <button className="duration-btn">60 mins</button>
            </div>
            {/* Display the timer */}
            <div className="timer-display">{formatTime(30 * 60)}</div>
            {/* Break button group */}
            <div className="duration-group">
              <h3>Start break</h3>
              <button className="duration-btn">5 mins</button>
              <button className="duration-btn">10 mins</button>
              <button className="duration-btn">15 mins</button>
            </div>
          </div>
          <button className="garden-btn">See your garden</button>
        </div>
      </div>
    </div>
  );
}
