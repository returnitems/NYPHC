import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./components/Homepage/Homepage";
import { Roster } from "./components/Roster/Roster";
import { NewPlayer } from "./components/NewPlayer/NewPlayer";
import "./App.css";

function App() {

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/players" element={<Roster setSelectedPlayer={setSelectedPlayer} />} />
        <Route path="/players/new" element={<NewPlayer selectedPlayer={selectedPlayer}/>} />
      </Routes>
    </>
  );
}

export default App;