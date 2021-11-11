const Accountant = require("../mongo-agent/accountant");
const express = require("express");
const router = express.Router();

// TODO add in index.js
// ! endpoint of :  /cities

router.get("/", async (req, res, next) => {
  res.send(await Accountant.find({}).select("city -_id"));
});

module.exports = router;
