import { Request, Response } from "express";
import { ConfirmPaymentService } from "./ConfirmPaymentService";

export class ConfirmPaymentController {
  async handle(req: Request, res: Response) {
    const confirmPaymentService = new ConfirmPaymentService();
    const preference = await confirmPaymentService.execute();

    return res.status(201).json({
      message: "success",
      payload: preference,
    });
  }
}
