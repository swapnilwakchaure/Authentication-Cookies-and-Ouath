require("dotenv").config();
import express from "express";
import cookieParser from "cookie-parser";
import dbConnection from "./config/db.connect";
import authRouter from "./routes/authRoutes";

const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req: any, res: any) => {
  res.send("welcome to authentication using cookies and oauth");
});

app.use("/api/auth", authRouter);

app.listen(port, async () => {
  try {
    await dbConnection;
    console.log(`server is running on port ${port}`);
  } catch (error) {
    console.log("error: ", error);
  }
});
