const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ msg: "oi" });
});

module.exports = routes;
