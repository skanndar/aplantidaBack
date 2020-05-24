const express = require("express");
const User = require("./../models/user");
const router = express.Router();
const parser = require("../config/cloudinary");

router.post("/profile-picture", parser.single("photo"), (req, res, next) => {
  const image_url = req.file.secure_url;
  console.log("req.session.currentUser :>> ", req.session.currentUser);
  const userId = req.session.currentUser._id;
  User.findByIdAndUpdate(userId, { image: image_url }, { new: true })

    .then((user) => {
      req.session.currentUser = user;
      console.log(user);
      res.status(200).json(user);
    })

    .catch((err) => next(createError(404)));
});

module.exports = router;
