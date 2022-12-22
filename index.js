// const AdminBro = require("admin-bro");
// const buildAdminRouter = require("./admin.routes");
"use strict";
const express = require("express");
const path = require("path");
const churchRoute = require("./routes/app.routes");
// const options = require("./admin.options");
const mongoose = require("mongoose");
const serverless = require("serverless-http");

const ApiError = require("./utils/apiError");

const app = express();
const port = 8000;

// mongoose.connect("mongodb://localhost:27017/church", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const admin = new AdminBro(options);
// const router = buildAdminRouter(admin);
// app.use(admin.options.rootPath, router);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "./public")));
app.use("/", churchRoute);

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

const checkRoute = (statusCode) => {
  if (statusCode === 404) {
    return "page.svg";
  }
};

app.get("*", (req, res, next) => {
  return next(new ApiError("Page not Found", 404));
});

//global error handler
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  res.render("error", {
    status: err.status,
    error: err,
    errImg: checkRoute(err.statusCode),
    message: err.message,
    stack: err.stack,
    statusCode: err.statusCode,
  });
});

app.listen(port, () => {
  console.log(`server is listening to http://localhost:${port}`);
});

//middleware

module.exports.handler = serverless(app);
