const express = require("express");

const router = express.Router();

const { registeruser, loggIn } = require("../controllers/authController");


router.get("/signin", (req, res) => {
  res.render('signUp')
});



router.post("/register", registeruser);

router.post("/login",loggIn)

module.exports = router;
