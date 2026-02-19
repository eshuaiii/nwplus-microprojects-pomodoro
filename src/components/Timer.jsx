import { useState, useEffect } from "react";
import RewardModal from "./RewardModal";
import "./Timer.css";

function Timer({ setPage }) {
  const [duration, setDuration] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [showReward, setShowReward] = useState(false);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          setShowReward(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

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

  function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return (
    <div className="timer-page">
      <div className="timer-wrapper">
        <div className="timer-layout">
          <div className="timer-controls">
            <button
              className="icon-btn"
              onClick={toggleRunning}
              aria-label={isRunning ? "Pause" : "Play"}
            >
              {isRunning ? (
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6"
                    y="4"
                    width="3"
                    height="16"
                    fill="#277645"
                    rx="0.5"
                  />
                  <rect
                    x="15"
                    y="4"
                    width="3"
                    height="16"
                    fill="#277645"
                    rx="0.5"
                  />
                </svg>
              ) : (
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" fill="#277645" />
                </svg>
              )}
            </button>
            <button
              className="icon-btn"
              onClick={handleReset}
              aria-label="Reset"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#277645"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </button>
          </div>

          <div className="timer-main">
            <div className="duration-group">
              <h3>Start studying</h3>
              <button
                className="duration-btn"
                onClick={() => handleSetDuration(30 * 60)}
              >
                30 mins
              </button>
              <button
                className="duration-btn"
                onClick={() => handleSetDuration(45 * 60)}
              >
                45 mins
              </button>
              <button
                className="duration-btn"
                onClick={() => handleSetDuration(1)}
              >
                1 mins
              </button>
            </div>

            <div className="timer-display">{formatTime(timeLeft)}</div>

            <div className="duration-group">
              <h3>Start break</h3>
              <button
                className="duration-btn"
                onClick={() => handleSetDuration(5 * 60)}
              >
                5 mins
              </button>
              <button
                className="duration-btn"
                onClick={() => handleSetDuration(10 * 60)}
              >
                10 mins
              </button>
              <button
                className="duration-btn"
                onClick={() => handleSetDuration(15 * 60)}
              >
                15 mins
              </button>
            </div>
          </div>

          <button className="garden-btn" onClick={() => setPage("garden")}>
            See your garden
          </button>
        </div>
      </div>

      {showReward && (
        <RewardModal
          durationMinutes={duration / 60}
          onClose={() => setShowReward(false)}
        />
      )}
    </div>
  );
}

export default Timer;
