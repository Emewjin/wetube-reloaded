import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import usersRouter from "./routers/usersRouter";
import videosRouter from "./routers/videosRouter";

const app = express(); 
const logger = morgan("dev"); 
app.use(logger);

//creates router, handlers (Controllers) => seperate /routers and /controllers

//using routers
app.use("/", globalRouter);
app.use("/users", usersRouter);
app.use("/videos", videosRouter);
//라우터를 이용하여 get에서 /users/edit과 같이 작성하지 않아도 됐음


const PORT = 4000;
const handleListening = () => console.log(`server listening on ${PORT}🚀`);
app.listen(PORT, handleListening);