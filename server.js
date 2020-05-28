const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Routes
const users = require("./routes/api/users");

//Initialize express app
const app = express();

//help app recognize json in requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/mernAuth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!");
});

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

//Routes
app.use("/api/users", users);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
