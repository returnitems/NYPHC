import { Link } from "react-router-dom";

export const Roster = ({ setSelectedPlayer, playerList }) => {

    const handleClick = (player) => {
        setSelectedPlayer(player);
    };

    return (
        <>
            <h1>New York Pucksters H.C. Current Roster</h1>
            {playerList.map((player) => (
                <div key={player._id}>
                    <Link to={`/players/${player._id}`} onClick={() => handleClick(player)}>
                        <h2>{player.name}</h2>
                    </Link>
                </div>
            ))}
            <Link to={'/players/new'}>
                <button>Add New Player</button>
            </Link>
        </>
    );
};