const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    title: { type: String, required: true },
    text: String,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    plant: { type: Schema.Types.ObjectId, ref: "Plant" },
    likes: Number,
    stars: Number,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
