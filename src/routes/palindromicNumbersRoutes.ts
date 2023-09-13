import { Router } from "express";
import { PalindromicNumbersController } from "../controllers/PalindromicNumbersController";

export const palindromicNumbersRoutes = Router();

const palindromicNumbersController = new PalindromicNumbersController();

palindromicNumbersRoutes.get(
  "/palindromicNumbers/list/:start/:end",
  palindromicNumbersController.list
);
