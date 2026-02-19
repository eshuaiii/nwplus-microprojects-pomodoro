import { useState } from "react";
import Timer from "./components/Timer";
import Garden from "./components/Garden";
import "./App.css";

function App() {
  const [page, setPage] = useState("timer");
  const [rewards, setRewards] = useState([]);


  return (
    <>
      {page === "timer" ? (
        <Timer setPage={setPage} setRewards={setRewards} />
      ) : (
        <Garden setPage={setPage} rewards={rewards} />
      )}
    </>
  );
}

export default App;
