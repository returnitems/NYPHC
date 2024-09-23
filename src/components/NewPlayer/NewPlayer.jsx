import { useState } from "react";

export const NewPlayer = ({ handleAddPlayer }) => {
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

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddPlayer(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Player Name:</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="age">Player Age:</label>
                <input id="age" name="age" value={formData.age} onChange={handleChange} />

                <label htmlFor="position">Player Position:</label>
                <input id="position" name="position" value={formData.position} onChange={handleChange} />

                <label htmlFor="height">Player Height:</label>
                <input id="height" name="height" value={formData.height} onChange={handleChange} />

                <label htmlFor="weight">Player Weight:</label>
                <input id="weight" name="weight" value={formData.weight} onChange={handleChange} />

                <label htmlFor="shoots">Shoots:</label>
                <input id="shoots" name="shoots" value={formData.shoots} onChange={handleChange} />

                <label htmlFor="birthplace">Player Birthplace:</label>
                <input id="birthplace" name="birthplace" value={formData.birthplace} onChange={handleChange} />

                <label htmlFor="drafted">Year Drafted:</label>
                <input id="drafted" name="drafted" value={formData.drafted} onChange={handleChange} />

                <button type="submit">Add Player</button>
            </form>
        </div>
    );
};