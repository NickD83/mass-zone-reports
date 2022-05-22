import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import massZonesRouter from "./api/v1/massZonesRouter.js";
import reportsRouter from "./api/v1/reportsRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/zones", massZonesRouter);
rootRouter.use("/api/v1/zones/reports", reportsRouter);

//place your server-side routes here

export default rootRouter;
