const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    commonName: { type: String, required: true },
    latinName: { type: String, required: true },
    img: [{ type: String }],
    characteristics: {
      family: { type: String },
      USDAHardiness: { type: String },
      knownHazards: { imgUrl: String, text: String },
      habitats: String,
      range: String,
      edibilityRating: String,
      otherUses: String,
      weedPotential: String,
      medicinalRating: String,
      care: { imgUrl: [String] },
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
    liked: Number,
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
