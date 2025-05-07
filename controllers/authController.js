const { generateToken } = require("../utils/generateToken");
const { passwordHash } = require("../utils/passwordHash");
const userModel = require("../models/usermodel");
const { passwordCompare } = require("../utils/passwordHash");



module.exports.registeruser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;
  const checkEmail = await userModel.findOne({ email: email });
  if (checkEmail) {
    return res
      .status(401)
      .send("user with this email alresdy exists create a new acc or Login");
  }
  try {
    const hashedPassword = await passwordHash(password);
    if (!hashedPassword) {
      return res.status(500).send("our bad");
    }
    const user = await userModel.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      password: hashedPassword,
    });
    const token = generateToken(user);
    res.cookie("token", token);
    res.render('home')
  } catch (err) {
    res.status(500).send("our bad try again");
  }
};




module.exports.loggIn = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(401).send('email or password incorrect')
    }

    const realPassword = user.password;
    const result = passwordCompare(password, realPassword);
    if (!result) {
      return res.status(404).send("Email or Password is not Correct");
    }
    const token = generateToken(user);
    res.cookie("token", token);
    res.send("you are logged in ");
  } catch (err) {
    return res.status(500).send("sry we fucked up try again");
  }
};
