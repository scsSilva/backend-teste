import { Request, Response } from "express";
import { PalindromicNumbersService } from "../services/PalindromicNumbersService";

const palindromicNumbersService = new PalindromicNumbersService();

class PalindromicNumbersController {
  list(req: Request, res: Response) {
    const { start, end } = req.params;

    try {
      const dataResponse = palindromicNumbersService.listNumbersInRange({
        start: parseInt(start),
        end: parseInt(end),
      });

      return res.json(dataResponse);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export { PalindromicNumbersController };
