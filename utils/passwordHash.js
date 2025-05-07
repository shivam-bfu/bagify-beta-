const bcrypt = require("bcrypt");
module.exports.passwordHash = async (password) => {
  if (!password) {
    console.error("Invalid password input");
    return null;
  }
  try {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    console.log("error:: ", err);
    return null;
  }
};

module.exports.passwordCompare= async (password, realPassword)=>{

   const result=  await bcrypt.compare(password,realPassword)
    return result;

}
