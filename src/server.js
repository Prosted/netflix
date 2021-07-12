import express from "express";
import morgan  from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

app.use(morgan("short"));
app.use(helmet());
app.use (express.urlencoded ({extended : true})); 
app.use (express.json ());

app.use("/", globalRouter);
app.use("/users",userRouter);
app.use("/videos",videoRouter);


export default app;