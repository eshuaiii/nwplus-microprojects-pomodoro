import Timer from "./components/Timer";
import "./App.css";
import Garden from "./components/Garden";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("timer");
  return (
    <>
      {page === "timer" ? (
        <Timer setPage={setPage} />
      ) : (
        <Garden setPage={setPage} rewards={[]} />
      )}
    </>
  );
}

export default App;
