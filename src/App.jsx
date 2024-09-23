import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as playerService from "./services/playerService.js"
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./components/Homepage/Homepage";
import { Roster } from "./components/Roster/Roster";
import { NewPlayer } from "./components/NewPlayer/NewPlayer";
import { PlayerDetail } from "./components/PlayerDetail/PlayerDetail.jsx";
import "./App.css";

function App() {

  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playerList, setPlayerList] = useState([]);

  const navigate = useNavigate();

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
      navigate('/players');
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
        <Route path="/players/:id" element={<PlayerDetail selectedPlayer={selectedPlayer} />} />
      </Routes>
    </>
  );
}

export default App;