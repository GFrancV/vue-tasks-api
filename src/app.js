import express from "express";
import connectionDB from "./database/db";

connectionDB();

const app = express();

export default app;
