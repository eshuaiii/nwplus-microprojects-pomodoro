import "./Garden.css";

const GRID_SIZE = 18;

// TODO

function Garden({ setPage, rewards }) {
  const grid = Array.from({ length: GRID_SIZE }, (_, i) => rewards[i] ?? null);

  return (
    <div className="garden-page">
      <div className="garden-wrapper">
        <div className="garden-layout">
          <div className="garden-actions">
            <button
              className="garden-back-btn"
              onClick={() => setPage("timer")}
            >
              Go Back to Timer
            </button>
          </div>
          {/* TODO */}l
        </div>
      </div>
    </div>
  );
}

export default Garden;
