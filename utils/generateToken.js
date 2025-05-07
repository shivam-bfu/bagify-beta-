const jwt = require("jsonwebtoken");
const generateToken = (user) => {
  const email = user.email;
  return jwt.sign({ email }, process.env.JWT_KEY);
};
module.exports.generateToken = generateToken;
