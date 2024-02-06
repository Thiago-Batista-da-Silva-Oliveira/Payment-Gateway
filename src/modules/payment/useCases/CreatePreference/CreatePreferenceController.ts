import { Request, Response } from "express";
import { CreatePreferenceService } from "./CreatePreferenceService";

export class CreatePreferenceController {
  async handle(req: Request, res: Response) {
    const { description, price, quantity } = req.body;
    const createPreferenceService = new CreatePreferenceService();
    const preference = await createPreferenceService.execute({
      description,
      price,
      quantity,
    });

    return res.status(201).json({
      message: "success",
      payload: preference,
    });
  }
}
