// create my first server
import express from "express";

// 1. create express application
// rules of design
const app = express();

// 2. configure the application
// application : how to response get request

const gossipMiddleware = (req, res, next) => {
    console.log(`this is middle. someone is going to ${req.url}`);
    // return res.send('it will be done here') // next()실행되지 않음
    next(); // next function means handleHome. 이게 없으면 handleHome은 실행되지 않음
}

const handleHome = (req, res) => { // this is not middleware, but final function, so we dont need next
    // console.log(req); // show what is comming to us
    console.log('this is final');
    return res.send("Hello");

}; 

const handleLogin = (req, res) => {
    return res.send("Login here");
}

app.get("/", gossipMiddleware, handleHome); // it means browser try to go '/' <= this is url, router
app.get("/login", handleLogin);

// 3. open application to the outside work
// listen the external connection
// 서버가 시작할때 응답할 포트와 콜백함수 지정
const PORT = 4000;
const handleListening = () => console.log(`server listening on ${PORT}🚀`);
app.listen(PORT, handleListening)