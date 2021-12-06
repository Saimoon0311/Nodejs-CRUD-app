const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  gender: String,
  status: Number,
});

const Userdb = mongoose.model("userdb", userSchema);
module.exports = Userdb;

// const vechilesSchema = new schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     required: true,
//     type: String,
//     unique: true,
//   },
//   gender: String,
//   status: String,
// });

// const Vechilesdb = mongoose.model("vechilesdb", vechilesSchema);
