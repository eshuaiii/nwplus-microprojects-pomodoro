const fs = require("node:fs");
const path = require("node:path");

// This turns a JSON file into a tiny database :)
// for persistence: we use a plain file db.json, read it into memory, modify it, write it back

const DB_PATH = path.join(__dirname, "db.json");

const DEFAULT_DB = { rewards: [] };

// reads the file to string (raw), then converts string into a JavaScript object
// if the file doesn't exist, create it with the default database
function readDb() {
  if (!fs.existsSync(DB_PATH)) {
    writeDb(DEFAULT_DB);
    return DEFAULT_DB;
  }

  const raw = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(raw);
}

// first converts JS object to JSON string, then overwrites db.json.
function writeDb(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2), "utf-8");
}

module.exports = { readDb, writeDb };
