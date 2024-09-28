import express from "express";
import cors from "cors";

import globalErrorHandler from "./middelware/globalErrorHandler";
import notFound from "./middelware/notFound";
import cookieParser from "cookie-parser";
const app = express();

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(express.json());
app.use(globalErrorHandler);
app.use(notFound);

export default app;
