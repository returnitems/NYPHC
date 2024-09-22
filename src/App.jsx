import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import * as playerService from "./services/playerService.js"
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./components/Homepage/Homepage";
import { Roster } from "./components/Roster/Roster";
import { NewPlayer } from "./components/NewPlayer/NewPlayer";
import "./App.css";

function App() {

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playerList, setPlayerList] = useState([]);

  const fetchPlayers = async () => {
    try {
      const players = await playerService.getPlayers()
      if (!players) {
        throw new Error("No Players ")
      }
      setPlayerList(players);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleAddPlayer = async (formData) => {
    try {
      const newPlayer = await playerService.createPlayer(formData)
      if (newPlayer.error) {
        throw new Error(newPlayer.error)
      }
      setPlayerList([newPlayer, ...playerList]);
      // Navigate('/players');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/players" element={<Roster setSelectedPlayer={setSelectedPlayer} playerList={playerList} />} />
        <Route path="/players/new" element={<NewPlayer handleAddPlayer={handleAddPlayer} />} />
      </Routes>
    </>
  );
}

export default App;