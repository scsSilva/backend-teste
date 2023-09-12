import { Router } from 'express';
import { cashFlowRoutes } from './cashFlowRoutes';
import { palindromicNumbersRoutes } from './palindromicNumbersRoutes';

export const routes = Router();

routes.use(cashFlowRoutes);
routes.use(palindromicNumbersRoutes);