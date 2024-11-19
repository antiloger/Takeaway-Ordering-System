import { Router, Request, Response } from "express";

const route = Router()

route.get('/', (req: Request, res: Response) => {
  res.send("top noch")
});

export default route
