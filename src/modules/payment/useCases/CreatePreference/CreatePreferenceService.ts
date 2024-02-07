import { Preference } from "mercadopago";
import { mercadoPagoClient } from "../../../../configs/mercadoPagoClient";
import { ICreatePaymentDTO } from "../../dtos/ICreatePaymentDTO";
import { randomUUID } from "crypto";

export class CreatePreferenceService {
  async execute({
    description,
    price,
    quantity,
  }: ICreatePaymentDTO): Promise<string> {
    try {
      const preference = new Preference(mercadoPagoClient);
      const data = await preference.create({
        body: {
          items: [
            {
              id: randomUUID(),
              title: description,
              unit_price: Number(price),
              quantity: Number(quantity),
            }
          ],
          back_urls: {
            "success": "http://localhost:3000/success",
            "failure": "http://localhost:3000/failure",
          },
          auto_return: "approved",
        }
      })  
  
      return data.id;
    } catch(err) {
      console.log(err.message, 'err')
      throw new Error(err.message);
    }
  }
}
