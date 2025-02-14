import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import tasksRoutes from "./routes/task.routes.js";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import compression from "compression";
import helmet from "helmet";

const app = express();

//CONFIG
app.use(helmet());
app.use(compression());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//ROUTES
app.use("/api", userRoutes);
app.use("/api", tasksRoutes);

//ERROR HANDLER
app.use(errorHandler);

export default app;
