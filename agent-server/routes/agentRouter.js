const Accountant = require("../mongo-agent/accountant");
const express = require("express");
const router = express.Router();

// TODO add in index.js
// ! endpoint of :  /agent

router.put("/:id/edit", async (req, res, next) => {
  await Accountant.updateOne({ _id: req.params.id }, { city: req.body.city });
  res.send(await Accountant.find({ _id: req.params.id }));
});

module.exports = router;
