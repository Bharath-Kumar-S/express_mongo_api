import express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import deckRouter from "./routes/deckRouter.js"
import { logEvents,logger } from "./middleware/logger.js";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;


app.use(logger);
app.use(express.json());

app.listen(PORT, () => {
    console.log(`⚡️⚡️⚡️[server]: Server is running at https://localhost:${PORT} ⚡️⚡️⚡️`);
     try {
    console.log("app is started");
    mongoose.connect('mongodb://localhost:27017/katana');
    const db = mongoose.connection;
    db.on("error", (err) => {
      console.error(err);
      logEvents(
        `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
        "mongoErrLog.log"
      );
    });
    db.on("open", () => console.log("Connected to DB!!!!"));
  } catch (err) {
    console.log(err);
  }
});

app.use('/deck', deckRouter);

export default app;