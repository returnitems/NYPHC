import { Link } from "react-router-dom";
import "./roster.css"

export const Roster = ({ setSelectedPlayer, playerList }) => {

    const handleClick = (player) => {
        setSelectedPlayer(player);
    };

    return (
        <div id="rosterBox">
            <h1 id="rosterBanner">New York Pucksters H.C. Current Roster</h1>
            {playerList.map((player) => (
                <div className="rosterNames" key={player._id}>
                    <Link to={`/players/${player._id}`} onClick={() => handleClick(player)}>
                        <h2>{player.name}</h2>
                    </Link>
                </div>
            ))}
            <Link to={'/players/new'}>
                <button id="newPlayer">Add New Player</button>
            </Link>
        </div>
    );
};