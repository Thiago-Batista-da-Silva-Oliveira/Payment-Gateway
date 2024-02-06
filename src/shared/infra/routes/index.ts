import { Router } from "express";
import { paymentRoutes } from "../../../modules/payment/infra/http/routes";


export const routes = Router();

routes.use("/payment", paymentRoutes);