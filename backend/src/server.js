// Basic setup
// ========================================================================================================

const express = require("express");
const cors = require("cors");

const { readDb, writeDb } = require("./db");

const app = express();
const PORT = 8000;

// CORS middleware to allow frontend to access backend
app.use(cors());
app.use(express.json());

// This just to make sure server is running and works in browser
app.get("/", (req, res) => {
  res.send("Pomodoro backend running!");
});

// ========================================================================================================
// Reward mapping helper
function rewardForFocusMinutes(minutes) {
  // TODO: stub
}

// ========================================================================================================
// ENDPOINT: Complete a focus session → earn reward
app.post("/api/focus-sessions", (req, res) => {
  // TODO: stub
});

// ========================================================================================================
// ENDPOINT: View your gallery of rewards
app.get("/api/rewards", (req, res) => {
  // TODO: stub
});

// ========================================================================================================
// ENDPOINT: Reset for demo purposes
app.post("/api/reset", (req, res) => {
  const db = readDb();
  db.rewards = [];
  writeDb(db);
  res.json({ ok: true });
});

// ========================================================================================================
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
