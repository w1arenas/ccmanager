/////////////// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

/////////////// APP CONFIGURATION
const APP = express();
const PORT = 3003;
const DBNAME = 'cards';
APP.use(express.json());

/////////////// CONTROLLER LOGIC
const ccmanagerController = require("./controllers/ccmanager.js")

/////////////// GLOBAL CONFIGURATION

/////////////// CONNECTION ERROR/SUCCESS

/////////////// CONNECT TO MONGO
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongoose...');
});




/////////////// MIDDLEWARE
APP.use("/ccmanager", ccmanagerController)
APP.use(express.json());

/////////////// DATABASE CONFIGURATION

   /////////////// LISTENER
APP.listen(PORT, () => {
    console.log("Listening to CCManager on PORT: " + PORT)
})
