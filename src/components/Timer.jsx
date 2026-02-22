import "./Timer.css";

function Timer() {
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
            <button className="icon-btn">
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
            </button>
            <button className="icon-btn">
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
              <button className="duration-btn">30 mins</button>
              <button className="duration-btn">45 mins</button>
              <button className="duration-btn">60 mins</button>
            </div>

            <div className="timer-display">{formatTime(30 * 60)}</div>

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

export default Timer;
