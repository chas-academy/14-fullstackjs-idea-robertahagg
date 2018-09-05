var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var UserSchema = new mongoose.Schema({
  username: { type: String, maxlength: [50, "Sorry your username is to long"] },
  email: { type: String },
  password: {
    type: String[(4, "Paswwords must contain at least 4 characters")]
  }
});

mongoose.model("Users", UserSchema);

module.exports = mongoose.model("Users", UserSchema);
