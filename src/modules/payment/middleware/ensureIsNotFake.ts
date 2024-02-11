import crypto from "crypto";
import { NextFunction, Request, Response } from "express";

export const ensureIsNotFake = (req: Request, res:Response, next: NextFunction) => {
  const headers = req.headers;
  const signature = headers["x-signature"] as string;
  if (signature) {
    const [ts, v1] = signature.split(",");
    const [tsKey, tsValue] = ts.split("=");
    const [v1Key, v1Value] = v1.split("=");

    const urlpath = req.originalUrl.split("?")[0];

    const template = `post;${urlpath};data.id=${req.query.id};type=${req.query.topic};user-agent:mercadopago webhook v1.0;${tsValue};action:${req.body.action};api_version:${req.body.api_version};date_created:${req.body.date_created};id:${req.body.id};live_mode:${req.body.live_mode};type:${req.body.type};user_id:${req.body.user_id};`;

    const cyphedSignature = crypto
      .createHmac("sha256", process.env.MP_WEBHOOK_SECRET)
      .update(template)
      .digest("hex");

    if (cyphedSignature === v1Value) return next();
    else {
      return res.status(400).json({ message: "Not valid signature" });
    }

  } else {
    return res.status(400).json({ message: "Not valid request" });
  }
};
