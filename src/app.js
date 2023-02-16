import express from "express";
import connectionDB from "./database/db";

import apiRoutes from "./router/api.routes";

connectionDB();

const app = express();

app.use("/api/", apiRoutes);

export default app;
