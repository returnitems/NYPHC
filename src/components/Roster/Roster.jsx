import { useEffect, useState } from "react";
import { getPlayers } from "../../services/playerService";

export const Roster = () => {

    const [playerList, setPlayerList] = useState([]);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

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
        </div>
    )
};