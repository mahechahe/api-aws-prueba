import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import { dbConnect } from "./config/mongo";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())

app.use(routes);
dbConnect().then(() => {
  console.log("DB UP");
});

app.listen(PORT, () => {
  console.log(`Server is runnin on port ${PORT}`);
});
