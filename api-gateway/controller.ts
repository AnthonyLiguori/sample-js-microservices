const axios = require("axios");
const movies = [
  { id: 1, title: "Film 1" },
  { id: 2, title: "Film 2" },
  { id: 3, title: "Film 2" },
];

module.exports = class Controller {
  // Récupère les détails d'un film spécifique par son ID
  static getMovie(id: any) {
    return axios.get(`http://localhost:8001/movies/${id}`);
  }

  // Récupère une session spécifique par son ID
  static getSession(id: any) {
    return axios.get(`http://localhost:8001/sessions/${id}`);
  }

  // Récupère les détails d'une session spécifique par son ID
  static getSessionDetail(id: any) {
    return axios.get(`http://localhost:8001/sessionDetails/${id}`);
  }

  static getData(id: number) {
    return movies.find((m) => m.id == id);
  }
};
