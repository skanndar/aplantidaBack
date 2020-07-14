const createError = require("http-errors");

exports.isLoggedIn = (req, res, next) => {
  console.log("req.session.currentUser :>> ", req.session.currentUser);
  if (req.session.currentUser) next();
  else next(createError(401));
};

exports.isNotLoggedIn = (req, res, next) => {
  console.log("req.session.currentUser :>> ", req.session.currentUser);
  if (!req.session.currentUser) next();
  else next(createError(403));
};

exports.validationLogin = (req, res, next) => {
  console.log("req.body :>> ", req.body);
  const { email, password } = req.body;
  console.log("validation email, password :>> ", email, password);

  if (!email || !password) next(createError(400));
  else next();
};

exports.validationSignup = (req, res, next) => {
  const { agreement, confirm, email, fName, genre, lName, password } = req.body;
  console.log("req.body :>> ", req.body);
  console.log(
    "agreement, confirm, email, fName, genre, lName, password, :>> ",
    agreement,
    confirm,
    email,
    fName,
    genre,
    lName,
    password
  );

  if (!email || !password || !fName || !lName || !genre) next(createError(400));
  else next();
};
