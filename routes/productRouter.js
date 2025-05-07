const express = require("express");


const productModel = require("../models/productmodel");

const upload = require("../config/multer-config");
const router = express.Router();
const { isLoggedIn } = require("../middlewares/isLoggedin");
const userModel = require("../models/usermodel");

router.post("/create", upload.single("image"), async (req, res) => {
  const name = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const discount = req.body.discount;
  try {
    let product = await productModel.create({
      image: req.file.buffer,
      name: name,
      price: price,
      description: description,
      discount: discount,
    });
    res.redirect("/owner/products");
  } catch (err) {
    console.log("the error came error::", err);
    res.redirect("/");
  }
});

router.get("/detail/:productId", async (req, res) => {
  try {
    const product = await productModel.findOne({ _id: req.params.productId });

    if (!product) {
      return res.status(500).send("Sorry cant find the product ");
    }

    res.render("productDetail", { product: product });
  } catch (err) {
    res.status(500).send("something went wrong");
    console.error("Error", err);
  }
});

router.get("/:id", isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email });
  const userId = user._id;
  const pId = req.params.id;
  let cartItem = {
    product: pId,
    quantity: 69,
  };

  const update = await userModel.findByIdAndUpdate(
    userId,
    { $push: { cart: cartItem } }, // Adds new item to cart array
  );
  res.redirect("/shop");
});

module.exports = router;
