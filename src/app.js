import express from "express";
import cors from "cors";

import connectionDB from "./database/db";
import errorHandler from "./middleware/errorHandler";

import indexRoutes from "./router/index.routes";
import authRoutes from "./router/auth.routes";
import apiRoutes from "./router/api.routes";
import { verifyToken } from "./middleware/authJWT";

connectionDB();

const app = express();
const urlPrefix = process.env.URL_PREFIX || '/';

app.use(cors({ origin: process.env.ALLOW_CORS_URL, credentials: true }));
app.use(express.json());

app.use(urlPrefix,indexRoutes);
app.use(urlPrefix,authRoutes);
app.use(`${urlPrefix}api/`, verifyToken, apiRoutes);

app.use((req, res) => {
	throw { statusCode: 404, message: "Endpoint not found" };
});
app.use(errorHandler);

export default app;
