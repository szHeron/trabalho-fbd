const express = require("express");
const query = require("../database");

const router = express.Router();

router.get("/", (req, res) => {
  query("SELECT * FROM test", (err, results) => {
    if (err) console.log(err);

    console.log(results);

    res.render("index", { title: "Home", test: "test", results: results });
  });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", { title: "Admin Dashboard", test: "test" });
});

module.exports = router;
