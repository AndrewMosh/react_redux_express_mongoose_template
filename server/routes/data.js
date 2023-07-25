const express = require("express");
const router = express.Router();
const Data = require("../models/Data");

router.get("/", (req, res) => {
  Data.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json({ error: "Failed to fetch data" }));
});

module.exports = router;
