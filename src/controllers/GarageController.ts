import { Request, Response } from "express";
import { Carro, Moto } from "../services/GarageService";

interface IGarageController {
  type: "CARRO" | "MOTO";
}

class GarageController {
  create(req: Request, res: Response) {
    const { type } = req.body as IGarageController;
    const { modelo, ano, marca } = req.body;

    try {
      if (type === "CARRO") {
        const { portas } = req.body;

        const newCar = new Carro(
          modelo,
          parseInt(ano),
          parseInt(portas),
          marca
        );

        return res.json(newCar);
      } else if (type === "MOTO") {
        const newMoto = new Moto(modelo, parseInt(ano), marca);

        return res.json(newMoto);
      }
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export { GarageController };
