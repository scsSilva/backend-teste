import { Router } from 'express';
import { CashFlowController } from '../controllers/CashFlowController';

export const cashFlowRoutes = Router();

const cashFlowController = new CashFlowController();

cashFlowRoutes.get('/cashFlow/change', cashFlowController.change);