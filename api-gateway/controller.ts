const axios = require("axios");
const movies = [
  { id: 1, title: "Film 1" },
  { id: 2, title: "Film 2" },
  { id: 3, title: "Film 3" },
];

module.exports = class Controller {
  // Récupère une session spécifique par son ID
  static getMovieCatalogue(id: any) {
    return axios.get(`http://localhost:8001/sessions/${id}`);
  }

  // Récupère les détails d'une session spécifique par son ID
  static getJeuxCatalogue(id: any) {
    return axios.get(`http://localhost:8001/sessionDetails/${id}`);
  }

  static getData(id: number) {
    return movies.find((m) => m.id == id);
  }
};
