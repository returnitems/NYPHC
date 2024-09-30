import { useEffect, useState } from "react"

export const PlayerUpdate = ({ selectedPlayer, handleUpdatePlayer }) => {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        position: "",
        height: "",
        weight: "",
        shoots: "",
        birthplace: "",
        drafted: "",
    });

    useEffect(() => {
        if (selectedPlayer) {
            setFormData({
                name: selectedPlayer.name,
                age: selectedPlayer.age,
                position: selectedPlayer.position,
                height: selectedPlayer.height,
                weight: selectedPlayer.weight,
                shoots: selectedPlayer.shoots,
                birthplace: selectedPlayer.birthplace,
                drafted: selectedPlayer.drafted,
            });
        }
    }, [selectedPlayer]);

    const handleUpdate = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdatePlayer(formData, selectedPlayer._id);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Player Name:</label>
                <input id="name" name="name" value={formData.name} onChange={handleUpdate} />

                <label htmlFor="age">Player Age:</label>
                <input id="age" name="age" value={formData.age} onChange={handleUpdate} />

                <label htmlFor="position">Player Position:</label>
                <input id="position" name="position" value={formData.position} onChange={handleUpdate} />

                <label htmlFor="height">Player Height:</label>
                <input id="height" name="height" value={formData.height} onChange={handleUpdate} />

                <label htmlFor="weight">Player Weight:</label>
                <input id="weight" name="weight" value={formData.weight} onChange={handleUpdate} />

                <label htmlFor="shoots">Shoots:</label>
                <input id="shoots" name="shoots" value={formData.shoots} onChange={handleUpdate} />

                <label htmlFor="birthplace">Player Birthplace:</label>
                <input id="birthplace" name="birthplace" value={formData.birthplace} onChange={handleUpdate} />

                <label htmlFor="drafted">Year Drafted:</label>
                <input id="drafted" name="drafted" value={formData.drafted} onChange={handleUpdate} />

                <button type="submit">Update Player</button>
            </form>
        </div>
    );
};