import { useState } from "react";
import "./RewardModal.css";

function getRewardFruit(durationMinutes) {
  if (durationMinutes === 30) return "🍊";
  if (durationMinutes === 45) return "🥭";
  if (durationMinutes === 60) return "🍓";
  return "🌻";
}

function RewardModal({ durationMinutes, onClose, setRewards }) {
  const [chosenIndex, setChosenIndex] = useState(null);
  const fruit = getRewardFruit(durationMinutes);
  const hasChosen = chosenIndex !== null;

  function handleAccept() {
    onClose();
  }

  return (
    <div className="reward-overlay">
      <div className="reward-card">
        <h2 className="reward-title">Time for a reward!</h2>

        <div className="reward-choices">
          <button
            className="reward-btn"
            disabled={hasChosen}
            onClick={() => setChosenIndex(0)}
          >
            {chosenIndex === 0 ? <span>{fruit}</span> : <span>?</span>}
          </button>
          <button
            className="reward-btn"
            disabled={hasChosen}
            onClick={() => setChosenIndex(1)}
          >
            {chosenIndex === 1 ? <span>{fruit}</span> : <span>?</span>}
          </button>
          <button
            className="reward-btn"
            disabled={hasChosen}
            onClick={() => setChosenIndex(2)}
          >
            {chosenIndex === 2 ? <span>{fruit}</span> : <span>?</span>}
          </button>
        </div>

        <div className="reward-accept-row">
          <button
            className="reward-accept-btn"
            disabled={!hasChosen}
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default RewardModal;
