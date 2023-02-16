import express from "express";
import connectionDB from "./database/db";
import errorHandler from "./middleware/errorHandler";

import apiRoutes from "./router/api.routes";

connectionDB();

const app = express();

app.use(express.json());

app.use("/api/", apiRoutes);

app.use(errorHandler);

export default app;
