import { Router } from "express";
import { GarageController } from "../controllers/GarageController";

export const garageRoutes = Router();

const garageController = new GarageController();

garageRoutes.post("/garage/create", garageController.create);
