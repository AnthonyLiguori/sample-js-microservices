"use strict";
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
module.exports = router;
