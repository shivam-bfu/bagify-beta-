const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    phoneNumber: Number,
    password: String,
    order: {
        type: Array,
        default: []
    },
    cart: [
        {
            product: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: "product", 
                required: true // Ensures every cart item has a valid product
            },
            quantity: { 
                type: Number, 
                default: 1, 
                min: 1 // Prevents negative quantities
            }
        }
    ]
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
