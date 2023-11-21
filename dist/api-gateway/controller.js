"use strict";
const axios = require("axios");
module.exports = class Controller {
    // Récupère les détails d'un film spécifique par son ID
    static getMovie(id) {
        return axios.get(`http://localhost:8001/movies/${id}`);
    }
    // Récupère une session spécifique par son ID
    getSession(id) {
        return axios
            .get(`http://localhost:8001/sessions/${id}`)
            .then((response) => response.data)
            .catch((error) => {
            console.error("Error fetching session:", error);
            throw error; // ou gérer l'erreur comme souhaité
        });
    }
    // Récupère les détails d'une session spécifique par son ID
    getSessionDetail(id) {
        return axios
            .get(`http://localhost:8001/sessionDetails/${id}`)
            .then((response) => response.data)
            .catch((error) => {
            console.error("Error fetching session detail:", error);
            throw error; // ou gérer l'erreur comme souhaité
        });
    }
};
