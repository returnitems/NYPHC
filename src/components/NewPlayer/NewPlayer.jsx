import { useState } from "react";

export const NewPlayer = () => {
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



    return (
        <div>
            <form>
                <label htmlFor="name">Player Name:</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} />

                <label htmlFor="age">Player Age:</label>
                <input id="age" name="age" value={formData.age} onChange={handleChange} />
            </form>
        </div>
    );
};