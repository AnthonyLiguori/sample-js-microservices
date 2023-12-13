"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Controller = require("./controller");
let router = express.Router();
router.get("/movie/", (req, res) => {
    const httpRequest = Controller.getAnimeCatalogue(req.params.id);
    httpRequest
        .then((result) => {
        res.send(result.data);
    })
        .catch((error) => {
        res.send("Erreur service 1 : " + error).status(500);
    });
});
router.get("/movie/catalog/:id", (req, res) => {
    const httpRequest = Controller.getAnimeCatalogue(req.params.id);
    httpRequest
        .then((result) => {
        res.send(result.data);
    })
        .catch((error) => {
        res.send("Erreur service 1 : " + error).status(500);
    });
});
router.get("/movie/action:id", (req, res) => {
    const httpRequest = Controller.getAnimeCatalogue(req.params.id);
    httpRequest
        .then((result) => {
        res.send(result.data);
    })
        .catch((error) => {
        res.send("Erreur service 1 : " + error).status(500);
    });
});
router.get("/data/:id", function (req, res) {
    const requete = Controller.getData(req.params.id);
    res.send(requete);
});
module.exports = router;
