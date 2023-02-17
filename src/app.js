import express from "express";
import connectionDB from "./database/db";
import errorHandler from "./middleware/errorHandler";

import indexRoutes from "./router/index.routes";
import authRoutes from "./router/auth.routes";
import apiRoutes from "./router/api.routes";

connectionDB();

const app = express();

app.use(express.json());

app.use(indexRoutes);
app.use(authRoutes);
app.use("/api/", apiRoutes);

app.use((req, res) => {
	throw { statusCode: 404, message: "Endpoint not found" };
});
app.use(errorHandler);

export default app;
