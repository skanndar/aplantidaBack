const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  fName: String,
  lName: String,
  image: String,
  genre: {type:String, enum:['male', 'female']},
  reviews: [{type: Schema.Types.ObjectId,ref:'Review'}],
  favorites: [{type: Schema.Types.ObjectId,ref:'Plant'}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;