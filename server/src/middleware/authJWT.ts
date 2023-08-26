import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authJWT = (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  next();
};
