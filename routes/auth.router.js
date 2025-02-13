const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require('bcryptjs');

const saltRounds = 10;
const User = require("../models/user.model");

//require uploader, already exported from cloudinary-setup.js
const uploader = require("./../config/cloudinary-setup");

// include CLOUDINARY:
//upload a single image per once.
// ADD an horitzontal middleware
router.post("/upload", uploader.single("image"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require("../helpers/middlewares");

// POST '/auth/signup'
router.post('/signup', isNotLoggedIn, validationLogin, (req, res, next) => {
  const { name, username, password, email, image } = req.body;
  User.findOne({ username })
    .then((foundUser) => {
      if (foundUser) {
        // If username is already taken, then return error response
        return next(createError(400)); // Bad Request
      }
      else {
        // If username is available, go and create a new user
        const salt = bcrypt.genSaltSync(saltRounds);
        const encryptedPassword = bcrypt.hashSync(password, salt);

        User.create({ name, username, password: encryptedPassword, email, image })
          .then((createdUser) => {
            // set the `req.session.currentUser` using newly created user object, to trigger creation of the session and cookie
            createdUser.password = "******";
            req.session.currentUser = createdUser; // automatically logs in the user by setting the session/cookie
            res
              .status(201) // Created
              .json(createdUser); // res.send()

          })
          .catch((err) => {
            next(createError(err));  //  new Error( { message: err, statusCode: 500 } ) // Internal Server Error
          });
      }
    })
    .catch((err) => {
      next(createError(err));
    });
})

// POST '/auth/login'
router.post('/login', isNotLoggedIn, validationLogin, (req, res, next) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then((user) => {
      if (!user) {
        // If user with that username can't be found, respond with an error
        return next(createError(404));  // Not Found
      }
      const passwordIsValid = bcrypt.compareSync(password, user.password); //  true/false
      if (passwordIsValid) {
        // set the `req.session.currentUser`, to trigger creation of the session
        user.password = "*******";
        req.session.currentUser = user;
        res
          .status(200)
          .json(user);
      }
      else {
        next(createError(401)); // Unathorized
      }
    })
    .catch((err) => {
      next(createError(err));
    });
})

// GET '/auth/logout'
router.get('/logout', (req, res, next) => {
  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    res
      .status(204)  //  No Content
      .send();
  })
})

// GET '/auth/me'
router.get('/me', isLoggedIn, (req, res, next) => {
  const currentUserSessionData = req.session.currentUser;
  res
    .status(200)
    .json(currentUserSessionData);
})

module.exports = router;
