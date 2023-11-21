"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controller = require("./controller");
let router = express.Router();
router.get("/catalog", function (req, res) {
    const requete = Controller.getMovie();
    requete
        .then((response) => res.send(response.data))
        .catch((error) => {
        console.error("Error fetching movie:", error);
        res.send("Erreur").status(500);
    });
});
router.get("/catalog", function (req, res) {
    const requete = Controller.getSession();
    requete
        .then((response) => res.send(response.data))
        .catch((error) => {
        console.error("Error fetching movie:", error);
        res.send("Erreur").status(500);
    });
});
router.get("/catalog", function (req, res) {
    const requete = Controller.getSessionDetail();
    requete
        .then((response) => res.send(response.data))
        .catch((error) => {
        console.error("Error fetching movie:", error);
        res.send("Erreur").status(500);
    });
});
router.get("/data/:id", function (req, res) {
    const requete = Controller.getData(req.params.id);
    res.send(requete);
});
module.exports = router;
