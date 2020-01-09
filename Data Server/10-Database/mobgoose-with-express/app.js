const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

mongoose.connect("mongodb://localhost:27017/shop", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
app.use(express.static(path.join(__dirname, "public")));

app.use("/databases", require("./routes/databases"));

app.listen(3001);
