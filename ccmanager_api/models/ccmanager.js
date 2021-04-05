/////////////// DEPENDENCIES
const mongoose = require("mongoose");
const Schema = mongoose.Schema


/////////////// SCHEMA
const ccmanagerSchema = new Schema ({
    cardName: {type: String, required: true},
    firstNumInAcct: {type: Number, required: true},
    lastFourAcctNums: {type: Number, required: true},
    bank: String,
    bankPhone: String,
    bankAddress: String,
    creditLimit: {type: Number, required: true},
    balance: {type: Number, required: true}, 
    dueDate: {type: Date, required: true},
    minimumPay: {type: Number, required: true},
    interest: {type: Number, required: true},
    comments: String
}, {timestamps: true});


const Card = mongoose.model("Card", ccmanagerSchema);


/////////////// Export the model to make it accessible in server.js
module.exports = Card