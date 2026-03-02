// Import statements
import "./Timer.css";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { VscDebugRestart } from "react-icons/vsc";
import TimerButton from "./TimerButton";
import { useState } from "react";

export default function Timer() {
  // State variables
  // duration is the total duration of the timer in seconds
  const [duration, setDuration] = useState(30 * 60);
  // timeLeft is the remaining time in seconds
  const [timeLeft, setTimeLeft] = useState(30 * 60);
  // isRunning is a boolean that indicates if the timer is running
  const [isRunning, setIsRunning] = useState(false);

  // Helper function to format time
  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function handleSetDuration(seconds) {}

  function toggleRunning() {}

  function handleReset() {}

  return (
    <div className="timer-page">
      <div className="timer-wrapper">
        <div className="timer-layout">
          <div className="timer-controls">
            {/* These are icons imported from react-icons library */}
            {/* if the isRunning state is true, show the pause icon, otherwise show the play icon */}
            {isRunning ? (
              <IoIosPause className="icon-btn" />
            ) : (
              <FaPlay className="icon-play" />
            )}
            <VscDebugRestart className="icon-btn" />
          </div>
          {/* Study button group */}
          <div className="timer-main">
            <div className="duration-group">
              <h3>Start studying</h3>
              <TimerButton value={30} />
              <TimerButton value={45} />
              <TimerButton value={60} />
            </div>

            <div className="timer-display">{formatTime(timeLeft)}</div>

            <div className="duration-group">
              <h3>Start break</h3>
              <TimerButton value={5} />
              <TimerButton value={10} />
              <TimerButton value={15} />
            </div>
          </div>
          <button className="garden-btn">See your garden</button>
        </div>
      </div>
    </div>
  );
}
