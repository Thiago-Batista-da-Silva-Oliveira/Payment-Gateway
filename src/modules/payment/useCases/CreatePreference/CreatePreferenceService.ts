import { Preference } from "mercadopago";
import { mercadoPagoClient } from "../../../../configs/mercadoPagoClient";
import { ICreatePaymentDTO } from "../../dtos/ICreatePaymentDTO";
import { randomUUID } from "crypto";
import { Payment } from "../../infra/prisma/entities/Payment";

export class CreatePreferenceService {
  async execute({
    description,
    price,
    quantity,
  }: ICreatePaymentDTO): Promise<string> {
    try {
      const preference = new Preference(mercadoPagoClient);
      const paymentId = randomUUID();
      const data = await preference.create({
        body: {
          items: [
            {
              id: paymentId,
              title: description,
              unit_price: Number(price),
              quantity: Number(quantity),
            }
          ],
          auto_return: "approved",
        }
      }) 
      
      const payment = Payment.create({
        description,
        price,
        quantity: Number(quantity),
        userId: '1',
        id: paymentId,
      })
  
      return data.id;
    } catch(err) {
      console.log(err.message, 'err')
      throw new Error(err.message);
    }
  }
}
