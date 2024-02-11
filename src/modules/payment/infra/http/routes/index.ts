import { Router } from "express";
import { CreatePreferenceController } from "../../../useCases/CreatePreference/CreatePreferenceController";
import { ConfirmPaymentController } from "../../../useCases/ConfirmPayment/ConfirmPaymentController";
import { ensureIsNotFake } from "../../../middleware/ensureIsNotFake";

export const paymentRoutes = Router();

const createPreferenceController = new CreatePreferenceController();
const confirmPayment = new ConfirmPaymentController();

paymentRoutes.post("/create_preference", createPreferenceController.handle);
paymentRoutes.post("/confirm_payment", ensureIsNotFake, confirmPayment.handle);
