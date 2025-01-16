const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const {connectToMongoDB} = require("./connect");
const {checkForAuthentication , restrictTo} = require("./middlewares/auth.middleware");
const URL = require("./models/url.model");
const urlRoute = require("./routes/url.routes");
const staticRoute = require("./routes/staticRouter");
const userRoute = require('./routes/user.routes');


const app = express();
const PORT = 3000;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(() =>
  console.log("Connected to MongoDB"));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views' , path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use('/url' ,restrictTo(["normal"]), urlRoute);
app.use("/", staticRoute);
app.use('/user' , userRoute);

app.listen(PORT , () =>{console.log(`Server is running at Port: ${PORT}`)});
