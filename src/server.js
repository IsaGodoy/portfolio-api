require("dotenv").config();
import express from "express";
const app = express();

//Routes
import IndexRoutes from "./routes/index.routes";
import MeRoutes from "./routes/me.routes";

//Settings
app.set("port", process.env.PORT || 3000);

//Routes
app.use(IndexRoutes);
app.use("/me", MeRoutes);

export default app;
