import { Request, Response } from "express";

const express = require("express");
const Controller = require("./controller");
let router = express.Router();

router.get("/movie/", (req: Request, res: Response) => {
    const httpRequest = Controller.getAnimeCatalogue(req.params.id);
    httpRequest
      .then((result) => {
        res.send(result.data);
      })
      .catch((error) => {
        res.send("Erreur service 1 : " + error).status(500);
      });
  });

router.get("/movie/catalog/:id", (req: Request, res: Response) => {
  const httpRequest = Controller.getAnimeCatalogue(req.params.id);
  httpRequest
    .then((result) => {
      res.send(result.data);
    })
    .catch((error) => {
      res.send("Erreur service 1 : " + error).status(500);
    });
});

router.get("/movie/action:id", (req: Request, res: Response) => {
    const httpRequest = Controller.getAnimeCatalogue(req.params.id);
    httpRequest
      .then((result) => {
        res.send(result.data);
      })
      .catch((error) => {
        res.send("Erreur service 1 : " + error).status(500);
      });
  });

router.get("/data/:id", function (req: Request, res: Response) {
  const requete = Controller.getData(req.params.id);
  res.send(requete);
});

module.exports = router;
