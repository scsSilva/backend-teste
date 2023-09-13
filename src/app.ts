import express, { Application, json, urlencoded } from "express";
import cors from "cors";
import { routes } from "./routes";

const app: Application = express();

app.use(json());
app.use(cors());
app.use(routes);

app.listen(3005);

export default app;
