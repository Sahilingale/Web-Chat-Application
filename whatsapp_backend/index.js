import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

//components
import Connection from "./database/db.js";
import Routes from "./routes/Route.js";

const app = express();
dotenv.config();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Routes);

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

Connection(username, password);
app.listen(PORT, () => {
  console.log(`server is running on PORT: ${PORT}`);
});
