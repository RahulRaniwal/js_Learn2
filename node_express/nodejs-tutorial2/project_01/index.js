const express = require("express");
// const users = require("./MOCK_DATA.json");
const userRouter = require("./routes/user.routes");
const {connectMongoDb} = require("./connection");
const {logReqRes} = require("./middlewares");
const app = express();
const port = 3000;

connectMongoDb("mongodb://127.0.0.1:27017/nodejs-learning-1").then(() => console.log("Mongodb connected!"));
// Middleware
app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"));

app.use("/api/user" , userRouter);

app.listen(port , () => console.log(`Server is running on port ${port}`));