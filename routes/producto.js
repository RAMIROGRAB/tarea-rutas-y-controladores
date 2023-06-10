var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/pruducto", function (req, res, next) {
  res.send("hola soy la pagina producto");
});

module.exports = router;
