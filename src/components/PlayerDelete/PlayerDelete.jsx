import { useNavigate } from "react-router-dom"

export const PlayerDelete = ({ selectedPlayer, handleDeletePlayer }) => {

    const navigate = useNavigate();

    return (
        <div>
            <h2>Are you sure you want to remove "{selectedPlayer.name}" from the current roster?</h2>
            <button onClick={() => handleDeletePlayer(selectedPlayer._id)}>Yes</button>
            <button onClick={() => navigate(`/players/${selectedPlayer._id}`)}>Cancel</button>
        </div>
    )
};