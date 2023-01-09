import express from "express";
import { authorization } from "../middleware/authorization";
import { timeSchema } from "../schema/time";

const router = express.Router();

router.use(authorization);

export const timeRoute = router.get("/", (_req, res) => {
  const epochTime = { epoch: Math.floor(Date.now() / 1000) };
  const result = timeSchema.validate(epochTime);

  if (result.error) {
    res.status(500).send(result.error.message);
    return;
  }

  res.status(200).send(epochTime);
});
