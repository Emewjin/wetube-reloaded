import express from "express";
import morgan from "morgan"

const logger = morgan("dev"); 
const app = express(); 

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected") {
        return res.send("<h1>Not Allowed</h1>")
    }
    console.log('allowed. you may continue');
    next();
};

const handleHome = (req, res) => { 
    console.log('this is final');
    return res.send("Hello");
}; 

const handleProtected = (req, res) => {
    return res.send('welcome to the private world')
};

const handleLogin = (req, res) => {
    return res.send("Login here");
};

app.use(logger);
app.use(privateMiddleware); 
app.get("/", handleHome);
app.get("/protected", handleProtected);
app.get("/login", handleLogin);

const PORT = 4000;
const handleListening = () => console.log(`server listening on ${PORT}🚀`);
app.listen(PORT, handleListening)