import { Router } from "express";
import { CreatePreferenceController } from "../useCases/CreatePreference/CreatePreferenceController";

export const paymentRoutes = Router();

const createPreferenceController = new CreatePreferenceController();

paymentRoutes.post("/create_preference", createPreferenceController.handle);
