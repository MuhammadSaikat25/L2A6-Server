import express from "express";
import cors from "cors";

import globalErrorHandler from "./middelware/globalErrorHandler";
import notFound from "./middelware/notFound";
import cookieParser from "cookie-parser";
import { userRoute } from "./modules/users/user.route";
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1", userRoute);
app.use(globalErrorHandler);
app.use(notFound);

export default app;
