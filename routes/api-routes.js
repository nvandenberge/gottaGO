// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        console.log('Error signing Up -', err)
        res.status(401).json(err);
      });
  });

  app.post("/api/review", (req, res) => {
    db.Review.create({
      locationName: req.body.locationName,
      address: req.body.address,
      state: req.body.state,
      city: req.body.city,
      zipCode: req.body.zipCode,
      changingStation: req.body.changingStation,
      feminineProducts: req.body.feminineProducts,
      genderNeutral: req.body.genderNeutral,
      toiletPaper: req.body.toiletPaper,
      multipleStalls: req.body.multipleStalls,
      airDryer: req.body.airDryer,
      fancy: req.body.fancy,
      familyFriendly: req.body.familyFriendly,
      motionSensors: req.body.motionSensors,
      handTowels: req.body.handTowels,
      handSoap: req.body.handSoap,
      clean: req.body.clean,
      keyRequired: req.body.keyRequired,
      payingCustomer: req.body.payingCustomer,
      review: req.body.review,
      starRating: req.body.starRating,
    })
      .then(() => {
        res.redirect("/members");
      })
  });

  app.get("/api/results/:zipCode", (req, res) => {
    db.Review.findAll({
      where: {zipCode: zipCode || ''} 
    })
      .then(() => {
        res.redirect("/members");
      })
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
