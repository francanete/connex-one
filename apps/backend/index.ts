import express from "express";
import dotenv from "dotenv";
import { timeRoute } from "./routes/time";
import promMid from "express-prometheus-middleware";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(
  express.json(),
  cors({ origin: "*" }),
  promMid({
    metricsPath: "/metrics",
    collectDefaultMetrics: true,
  })
);

app.use("/time", timeRoute);

app.listen(port, () => {
  console.log(`⚡️[SERVER]: Server is running at http://localhost:${port}`);
});
