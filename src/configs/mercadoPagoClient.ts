import { MercadoPagoConfig } from "mercadopago";
import { ACCESS_TOKEN } from ".";

export const mercadoPagoClient = new MercadoPagoConfig({
  accessToken: ACCESS_TOKEN,
});
