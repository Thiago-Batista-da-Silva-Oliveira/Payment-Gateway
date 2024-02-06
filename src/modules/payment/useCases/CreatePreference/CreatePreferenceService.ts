import { Preference } from "mercadopago";
import { nanoid } from "nanoid";
import { mercadoPagoClient } from "../../../../configs/mercadoPagoClient";
import { ICreatePaymentDTO } from "../../dtos/ICreatePaymentDTO";

export class CreatePreferenceService {
  async execute({
    description,
    price,
    quantity,
  }: ICreatePaymentDTO): Promise<string> {
    const preference = new Preference(mercadoPagoClient);
    const data = await preference.create({
      body: {
        items: [
          {
            id: nanoid(),
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
  }
}
