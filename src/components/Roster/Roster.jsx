import { useEffect, useState } from "react";
import { getPlayers } from "../../services/playerService";
import { Link } from "react-router-dom";

export const Roster = (setSelectedPlayer) => {

    const [playerList, setPlayerList] = useState([]);

    const handleClick = (player) => {
        setSelectedPlayer(player);
    };

    const fetchPlayers = async () => {
        try {
            const players = await getPlayers();
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

    return (
        <div>
            <h1>New York Pucksters H.C. Current Roster</h1>
            <div>
                {playerList.map((player) => (
                    <div key={player._id}>
                        <Link to={`/players/${player._id}`} onClick={() => handleClick(player)} >
                            <h2>{player.name}</h2>
                        </Link>
                    </div>
                ))}
                <Link to='/players/new'>
                    <button>Add New Player</button>
                </Link>
            </div>
        </div>
    )
};