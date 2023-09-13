import { Router } from "express";
import { cashFlowRoutes } from "./cashFlowRoutes";
import { palindromicNumbersRoutes } from "./palindromicNumbersRoutes";
import { garageRoutes } from "./garageRoutes";

export const routes = Router();

routes.use(cashFlowRoutes);
routes.use(palindromicNumbersRoutes);
routes.use(garageRoutes);
