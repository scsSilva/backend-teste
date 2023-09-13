import express, { Application, json } from "express";
import "dotenv/config";
import cors from "cors";
import { routes } from "./routes";

const app: Application = express();

app.use(json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3000);

export default app;
