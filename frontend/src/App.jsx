import Timer from "./components/Timer";
import "./App.css";
import Garden from "./components/Garden";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("timer");
  const [rewards, setRewards] = useState([]);

  // ========================================================================================================
  // TODO

  return (
    <>
      {page === "timer" ? (
        <Timer setPage={setPage} setRewards={setRewards} />
      ) : (
        <Garden setPage={setPage} rewards={[]} />
      )}
    </>
  );
}

export default App;
