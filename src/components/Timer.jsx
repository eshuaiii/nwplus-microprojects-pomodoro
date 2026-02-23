// Import statements
import "./Timer.css";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import TimerButton from "./TimerButton";
import { useState } from "react";

export default function Timer() {
  const [duration, setDuration] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  // Helper function to format time
  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function handleSetDuration(seconds) {
    setDuration(seconds);
    setTimeLeft(seconds);
    setIsRunning(true);
  }

  function toggleRunning() {
    setIsRunning((prev) => !prev);
  }

  function handleReset() {
    setTimeLeft(duration);
    setIsRunning(false);
  }

  return (
    <div className="timer-page">
      <div className="timer-wrapper">
        <div className="timer-layout">
          <div className="timer-controls">
            {/* These are icons imported from react-icons library */}
            {isRunning ? <IoIosPause className="icon-btn" onClick={toggleRunning} /> : <FaPlay className="icon-btn" onClick={toggleRunning} />}
            <VscDebugRestart className="icon-btn" onClick={handleReset} />
          </div>
          {/* Study button group */}
          <div className="timer-main">
            <div className="duration-group">
              <h3>Start studying</h3>
              <TimerButton
                value={30}
                onClick={() => handleSetDuration(30 * 60)}
              />
              <TimerButton
                value={45}
                onClick={() => handleSetDuration(45 * 60)}
              />
              <TimerButton
                value={60}
                onClick={() => handleSetDuration(60 * 60)}
              />
            </div>

            <div className="timer-display">{formatTime(timeLeft)}</div>

            <div className="duration-group">
              <h3>Start break</h3>
              <TimerButton
                value={5}
                onClick={() => handleSetDuration(5 * 60)}
              />
              <TimerButton
                value={10}
                onClick={() => handleSetDuration(10 * 60)}
              />
              <TimerButton
                value={15}
                onClick={() => handleSetDuration(15 * 60)}
              />
            </div>
          </div>
          <button className="garden-btn">See your garden</button>
        </div>
      </div>
    </div>
  );
}
