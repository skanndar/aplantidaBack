const express = require("express");
const siteRouter = express.Router();

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
    .populate({
      path: "reviews",
      path: "favorites",
    })
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => next(createError(404)));
});

// EDIT PROFILE
// PUT         '/user/:id'
siteRouter.put("/user", isLoggedIn, (req, res, next) => {
  const { _id } = req.session.currentUser;
  const { image, email, lName, fName, genre } = req.body;
  const updatedUser = { image, email, lName, fName, genre };
  //check how to handle password

  User.findByIdAndUpdate(_id, updatedUser, { new: true })
    .populate({
      path: "reviews",
      path: "favorites",
    })
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => next(createError(404)));
});

// LIST PLANTS
// GET         '/plants'
siteRouter.get("/plants", isLoggedIn, (req, res, next) => {
  Plant.find()
    .populate({
      path: "reviews",
    })
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

  Plant.find({ $or: [ {'commonName': {'$regex': searchStr, '$options': 'i'}},{'latinName': {'$regex': searchStr, '$options': 'i'}}] })
    .populate({
      path: "reviews",
    })
    .then((plants) => {
      console.log(plants);
      res.status(200).json(plants);
    })
    .catch((err) => next(createError(404)));
});

// PLANT DETAIL
// GET         '/plant/:id'
siteRouter.get("/plant/:id", isLoggedIn, (req, res, next) => {
  const { id } = req.params;

  Plant.findById(id)
    .populate({
      path: "reviews",
    })
    .then((plant) => {
      console.log(plant);
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

// DELETE User
// GET         '/user/:id'
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
// POST         '/user/:id'
siteRouter.post("/review/", isLoggedIn, (req, res, next) => {
  const { title, text, user, plant, likes, stars } = req.body;

  Review.create({ title, text, user, plant, likes, stars })
    .then((review) => {
      console.log(review);
      res.status(200).json(review);
    })
    .catch((err) => next(createError(404)));
});

module.exports = siteRouter;
