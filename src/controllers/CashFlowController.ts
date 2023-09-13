import { Request, Response } from "express";
import { CashFlowService } from "../services/CashFlowService";

const cashFlowService = new CashFlowService();

class CashFlowController {
  change(req: Request, res: Response) {
    const { price, amountReceived } = req.params;

    try {
      const dataResponse = cashFlowService.calculateChange({
        price: parseInt(price),
        amountReceived: parseInt(amountReceived),
      });

      return res.json(dataResponse);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export { CashFlowController };
