const Accountant = require("../mongo-agent/accountant");
const express = require("express");
const router = express.Router();

// TODO add in index.js
// ! endpoint of :  /agents

router.get("/?", async (req, res, next) => {
  console.log(req.query.city);
  res.send(await Accountant.find({ city: req.query.city }));
});

module.exports = router;
