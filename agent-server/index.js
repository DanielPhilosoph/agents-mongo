const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const citiesRouter = require("./routes/citiesRouter");
const agentsRouter = require("./routes/agentsRouter");
const agentRouter = require("./routes/agentRouter");

const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// * MongoDB connection
const url = `mongodb+srv://daniel_mongo_user:${process.env.PASSWORD}@cluster0.xx3io.mongodb.net/accountant?retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/cities", citiesRouter);
app.use("/agents", agentsRouter);
app.use("/agent", agentRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
