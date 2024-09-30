import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as playerService from "./services/playerService.js"
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./components/Homepage/Homepage";
import { Roster } from "./components/Roster/Roster";
import { NewPlayer } from "./components/NewPlayer/NewPlayer";
import { PlayerDetail } from "./components/PlayerDetail/PlayerDetail.jsx";
import { PlayerUpdate } from "./components/PlayerUpdate/PlayerUpdate.jsx";
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

  const handleUpdatePlayer = async (formData, playerId) => {
    try {
      const updatePlayer = await playerService.updatePlayer(formData, playerId);
      if (updatePlayer.error) {
        throw new Error(updatePlayer.error)
      }
      setPlayerList(playerList.map((player) => (player._id === playerId ? updatePlayer : player)));
      setSelectedPlayer(updatePlayer);
      navigate(`/players/${playerId}`);
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
        <Route path="/players/:id/edit" element={<PlayerUpdate selectedPlayer={selectedPlayer} handleUpdatePlayer={handleUpdatePlayer} />} />
      </Routes>
    </>
  );
}

export default App;