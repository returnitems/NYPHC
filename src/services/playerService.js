import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/players`;

export const getPlayers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching players:', error);
    }
};

export const getSinglePlayer = async (playerId) => {
    try {
        const response = await axios.get(`${BASE_URL}/${playerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching player:', error);
    }
};

export const createPlayer = async (playerData) => {
    try {
        const response = await axios.post(BASE_URL, playerData);
        return response.data;
    } catch (error) {
        console.error('Error creating player:', error);
    }
};

export const updatePlayer = async (playerId, playerData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${playerId}`, playerData);
        return response.data;
    } catch (error) {
        console.error('Error updating player:', error);
    }
};

export const deletePlayer = async (playerId) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${playerId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting player:', error);        
    }
};