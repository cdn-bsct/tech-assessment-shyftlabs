const express = require("express");
// const path = require("path");
const logger = require("morgan");

require("dotenv").config();
require("./config/database");

const app = express();

// app middlewares
app.use(logger("dev"));
app.use(express.json());

// API routes below
app.use("/api/students", require("./routes/students"));

const port = process.env.PORT || 3001;

app.listen(3001, function () {
  console.log(`Express app running on port ${port}`);
});
