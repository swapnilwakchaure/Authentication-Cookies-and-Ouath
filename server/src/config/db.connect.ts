require("dotenv").config();
import mongoose from "mongoose";

const dbConnection = mongoose.connect(process.env.mongoURL!);

export default dbConnection;
