import { useNavigate, Link } from "react-router-dom"

export const PlayerDetail = ({ selectedPlayer }) => {
    const navigate = useNavigate();

    return (
        <div>
            <h3>{selectedPlayer.name}</h3>
            <p>Age: {selectedPlayer.age}</p>
            <p>Birthplace: {selectedPlayer.birthplace}</p>
            <h4>Position: {selectedPlayer.position}</h4>
            <p>Height: {selectedPlayer.height}</p>
            <p>Weight: {selectedPlayer.weight}</p>
            <h4>Shoots: {selectedPlayer.shoots}</h4>
            <h5>Year Drafted: {selectedPlayer.drafted}</h5>
            <Link to={`/players/${selectedPlayer._id}/edit`}>
                <button>Edit/Update Player</button>
            </Link>
            <Link to={`/players/${selectedPlayer._id}/delete`}>
                <button>Delete Player From Roster</button>
            </Link>
            <button onClick={() => navigate('/players')}>Back to Roster</button>
        </div>
    )
};