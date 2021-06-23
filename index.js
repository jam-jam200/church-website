const express = require("express");
const cors = require("cors");
const path = require("path");
const churchRoute = require("./routes/app.routes");

const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

app.use("/", churchRoute);

app.use("/", express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.all("*", (req, res, next) => {
  res.send("<h1>404 page not found 😢😢</h1>");
});

app.listen(port, () => {
  console.log(`server is listening to port ${port}`);
});
