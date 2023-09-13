import express, { json, urlencoded } from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(routes);

app.listen(3000);
