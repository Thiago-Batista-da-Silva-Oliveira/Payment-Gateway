import { Router } from "express";
import { paymentRoutes } from "../../../modules/payment/routes";


export const routes = Router();

routes.use("/payment", paymentRoutes);