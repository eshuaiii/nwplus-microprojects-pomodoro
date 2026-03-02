import "./Garden.css";

const GRID_SIZE = 18;

// TODO
const REWARD_IMAGES = {
  mango: '/mango.png',
  orange: '/orange.png',
  strawberry: '/strawberry.png',
  flower: '/flower.png',
  pepper: '/pepper.png',
}

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
          {/* TODO */}
          <div className="garden-grid">
            {grid.map((reward, index) => (
              <div className="garden-cell" key={index}>
                {reward && (
                  <img
                    className="garden-reward-img"
                    src={REWARD_IMAGES[reward] ?? '/flower.png'}
                    alt={reward}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Garden;
