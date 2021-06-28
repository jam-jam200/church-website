const express = require("express");
const path = require("path");
const churchRoute = require("./routes/app.routes");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");



const app = express();

// app.configure()
//middleware
app.use(express.json());                                                                    
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const port = 8000;

app.use("/", churchRoute);
app.use("/", express.static(path.join(__dirname, "/public")));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//error message handler
app.all("*", (req, res, next) => {
  res.send("<h1>404 page not found 😢😢</h1>");
});

//server
app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
