import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const app = express();
app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(helmet());

// route import
import userRouter from "./routes/user.routes.js";
import videoRouter from "./routes/video.routes.js";

// route declare
app.use("/api/v1/users", userRouter);
app.use("/api/v1/videos", videoRouter);

export { app };
