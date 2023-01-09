import { Request, Response, NextFunction } from "express";
export const authorization = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  if (authorization && authorization.split(" ")[1] === process.env.TOKEN) {
    next();
  } else {
    res.status(403).send("Unauthorized");
  }
};
