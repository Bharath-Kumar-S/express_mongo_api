import { Request, Response, NextFunction } from "express";
import { logEvents } from "./logger.js";

type Err = {
  message: String;
  name: String;
};

export const errorHandler = (
  err: Err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errlog.log"
  );

  const status = res.statusCode ? res.statusCode : 500; // server error

  res.status(status).json({ message: err.message });
};
