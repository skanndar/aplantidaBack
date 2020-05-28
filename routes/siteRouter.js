const express = require("express");
const siteRouter = express.Router();
const mongoose = require("mongoose");

const createError = require("http-errors");

const User = require("../models/user");
const Review = require("../models/review");
const Plant = require("../models/plant");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin,
} = require("../helpers/middlewares");

// ACCESS PROFILE
// GET         '/user/:id'
siteRouter.get("/user/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  console.log("id :>> ", id);

  User.findById(id)
    .populate("favorites")
    .populate({
      path: "reviews",
      model: "Review",
      populate: [
        {
          path: "user",
          model: "User",
        },
        {
          path: "plant",
          model: "Plant",
        },
      ],
    })

    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => next(createError(404)));
});

// EDIT PROFILE
// PUT         '/user/'
siteRouter.put("/user", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  const { image, email, lName, fName, genre } = req.body;
  console.log("req.body :>> ", req.body);
  const updatedUser = { image, email, lName, fName, genre };
  //check how to handle password

  User.findByIdAndUpdate(_id, updatedUser, { new: true })
    .populate("favorites")
    .populate({
      path: "reviews",
      model: "Review",
      populate: [
        {
          path: "user",
          model: "User",
        },
        {
          path: "plant",
          model: "Plant",
        },
      ],
    })

    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => next(createError(404)));
});

// EDIT PROFILE TO DELETE FAVORITE
// PUT         '/user-favorites/'
siteRouter.put("/user-favorites", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  console.log("req.body :>> ", req.body, _id);
  const { plantId } = req.body;

  User.findByIdAndUpdate(_id, { $pull: { favorites: plantId } }, { new: true })
    .populate("favorites")
    .populate({
      path: "reviews",
      model: "Review",
      populate: [
        {
          path: "user",
          model: "User",
        },
        {
          path: "plant",
          model: "Plant",
        },
      ],
    })
    .then((user) => {
      console.log("user after delete plant :>> ", user);
      res.status(200).json(user);
    })
    .catch((err) => next(createError(404)));
});

// EDIT PROFILE TO DELETE FAVORITE
// PUT         '/favorites/'
siteRouter.put("/favorites", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  console.log("req.body :>> ", req.body, _id);
  const { plantId, action } = req.body;
  let effect;

  console.log(action === "remove");

  if (action === "add") {
    effect = "$addToSet";
  } else if (action === "remove") {
    effect = "$pull";
  } else {
    return next(createError(500));
  }

  User.findByIdAndUpdate(
    _id,
    { [effect]: { favorites: plantId } },
    { new: true }
  )
    .populate("favorites")
    .populate({
      path: "reviews",
      model: "Review",
      populate: [
        {
          path: "user",
          model: "User",
        },
        {
          path: "plant",
          model: "Plant",
        },
      ],
    })
    .then((user) => {
      console.log("user after delete plant :>> ", user);
      req.session.currentUser = user;
      res.status(200).json(user);
    })
    .catch((err) => next(createError(404)));
});

// EDIT PLANT, TO ADD ONE REVIEW ID
// PUT         '/plant/'
siteRouter.put("/plant", isLoggedIn, (req, res, next) => {
  // const { _id } = req.session.currentUser;
  console.log("req.body :>> ", req.body);
  const { reviewId, plant } = req.body;
  const id = mongoose.Types.ObjectId(plant);
  console.log("ObjectId :>> ", id);
  console.log("plant === id, plant == id :>> ", plant === id, plant == id);
  // add one review id to plant

  // User.findById(id)
  // .populate("favorites reviews")

  Plant.findByIdAndUpdate(
    id,
    { $addToSet: { reviews: reviewId } },
    { new: true }
  )
    .populate("favorites")
    .populate({
      path: "reviews",
      model: "Review",
      populate: [
        {
          path: "user",
          model: "User",
        },
        {
          path: "plant",
          model: "Plant",
        },
      ],
    })
    .then((updatedPlant) => {
      console.log("updatedPlant :>> ", updatedPlant);
      res.status(200).json(updatedPlant);
    })
    .catch((err) => next(createError(404)));
});

// LIST PLANTS
// GET         '/plants'
siteRouter.get("/plants", isLoggedIn, (req, res, next) => {
  Plant.find()
    .populate("reviews")

    .then((plants) => {
      console.log(plants);
      res.status(200).json(plants);
    })
    .catch((err) => next(createError(404)));
});

// LIST PLANTS
// post         '/plants'
siteRouter.post("/plants", isLoggedIn, (req, res, next) => {
  const { searchStr } = req.body;
  console.log("searchStr, req.body :>> ", searchStr, req.body);

  Plant.find({
    $or: [
      { commonName: { $regex: searchStr, $options: "i" } },
      { latinName: { $regex: searchStr, $options: "i" } },
    ],
  })
    .populate("reviews")
    .then((plants) => {
      console.log(plants);
      res.status(200).json(plants);
    })
    .catch((err) => next(createError(404)));
});

// PLANT DETAIL
// GET         '/plant/:name'
siteRouter.get("/plant/:name", isLoggedIn, (req, res, next) => {
  const { name } = req.params;

  Plant.findOne({ latinName: name })
    .populate({
      path: "reviews",
      model: "Review",
      populate: [
        {
          path: "user",
          model: "User",
        },
        {
          path: "plant",
          model: "Plant",
        },
      ],
    })
    .then((plant) => {
      plant.reviews.sort((a, b) => b.created_at - a.created_at);

      console.log("plant --> ", plant.reviews);
      res.status(200).json(plant);
    })
    .catch((err) => next(createError(404)));
});

// DELETE User
// GET         '/user/:id'
siteRouter.delete("/user/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;
  req.session.destroy();

  User.findByIdAndDelete(id)
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => next(createError(404)));
});

// DELETE review
// GET         '/review/:id'
siteRouter.delete("/review/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

  Review.findByIdAndDelete(id)
    .then((review) => {
      console.log(review);
      res.status(200).json(review);
    })
    .catch((err) => next(createError(404)));
});

// ADD REVIEW
// POST         '/review'
siteRouter.post("/review", isLoggedIn, async (req, res, next) => {
  let { title, text, user, plant, likes, stars } = req.body;
  try {
    const newReview = await Review.create({
      title,
      text,
      user,
      plant,
      likes,
      stars,
    });
    console.log("created review :>> ", newReview);
    await User.findByIdAndUpdate(
      user,
      { $addToSet: { reviews: newReview._id } },
      { new: true }
    );
    await Plant.findByIdAndUpdate(
      plant,
      { $addToSet: { reviews: newReview._id } },
      { new: true }
    );
    res.status(200).json(newReview);
  } catch (error) {
    next(createError(404));
  }
});

// GET         '/review'
siteRouter.get("/review/:plantId", isLoggedIn, (req, res, next) => {
  const { plantId } = req.params;

  Review.find({ plant: plantId })
    .then((reviews) => {
      console.log(reviews);
      res.status(200).json(reviews);
    })
    .catch((err) => next(createError(404)));
});

module.exports = siteRouter;
